const express = require('express');
const ut = require('../util')
const dm = require('../db/db.init')
const alert = require('../view/alertMsg');
const template = require('../view/maintemplate');
const bRouter = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


bRouter.get('/list/:page', ut.isLoggedIn, (req, res) => {
    let page = parseInt(req.params.page);
    req.session.currentPage = page;
    let offset = (page - 1) * 10;
    dm.getBbsTotalCount(rows => {
        let totalPage = Math.ceil(rows.count / 10);
        let startPage = Math.floor((page-1)/10)*10 + 1;
        let endPage = Math.ceil(page/10)*10;
        endPage = (endPage > totalPage) ? totalPage : endPage;
        dm.getBbsList(offset, data => {
            let view = require('../view/list');
            let navBar = template.navBar(req.session.uname?req.session.uname:'');
            let html = view.mainForm(navBar, data, page, startPage, endPage, totalPage);
            res.send(html);
        })
    });
});


bRouter.get('/bid/write', ut.isLoggedIn, (req,res) => {
        const view = require('../view/write')
        let navBar = template.navBar(req.session.uname?req.session.uname:'${uname}');
        let html = view.mainForm(navBar);
        res.send(html);
    });

bRouter.post('/bid/write', ut.isLoggedIn, (req,res) => {
    let title = req.body.title;
    let content = req.body.content;
    let params = [req.session.uid, title, content];
    dm.getWrite(params, () => {
        res.redirect('/bbs/list/1');
    })
});

bRouter.get('/bid/:bid', (req,res) => {
    let bid = parseInt(req.params.bid);
    console.log(bid);
    dm.getContents(bid, rows => {
        dm.incrementCount(bid, () => {
            dm.getReplyData(bid, replies => {
                const view = require('../view/contents')
                let navBar = template.navBar(req.session.uname?req.session.uname:'개발자');
                let html = view.viewForm(navBar, rows, replies);
            res.end(html);
            });
        });
    });
});

bRouter.post('/reply', ut.isLoggedIn, (req, res) => {
    let bid = parseInt(req.body.bid);
    let uid = req.session.uid;
    let content = req.body.content;
    let isMine = (uid === req.body.uid) ? 1 : 0;
    let params = [bid, uid, content, isMine];
    dm.insertReply(params, () => {
        dm.increaseReplyCount(bid, () => {
            res.redirect(`/bbs/bid/${bid}`)
        });
    });
});

bRouter.get('/delete/:bid/uid/:uid', ut.isLoggedIn, (req, res) => {
    let bid = parseInt(req.params.bid);
    let uid = req.params.uid;
    if (uid !== req.session.uid) {
        let html = alert.alertMsg('삭제 권한이 없습니다.', `/bbs/bid/${bid}`);
        res.send(html);
    } else {
        let view = require('../view/bbsDelete');
        let navBar = template.navBar(req.session.uname?req.session.uname:'개발자');
        let html = view.delete(navBar, bid);
        res.send(html);
    }
});

bRouter.get('/deleteConfirm/:bid', ut.isLoggedIn, (req, res) => {
    let bid = req.params.bid;
    let page = parseInt(req.session.currentPage);
    dm.getDelete(bid, () => {
        res.redirect(`/bbs/list/${page}`);
    });
});

bRouter.get('/update/:bid/uid/:uid', ut.isLoggedIn, (req, res) => {
    let bid = parseInt(req.params.bid);
    let uid = req.params.uid;
    if (uid !== req.session.uid) {
        let html = alert.alertMsg('수정 권한이 없습니다.', `/bbs/bid/${bid}`);
        res.send(html);
    } else {
        dm.getBbsData(bid, result => {
            let view = require('../view/bbsUpdate');
            let navBar = template.navBar(req.session.uname?req.session.uname:'개발자');
            let html = view.update(navBar, result);
            res.send(html);
        });
    }
});

bRouter.post('/update', ut.isLoggedIn, (req, res) => {
    let bid = req.body.bid;
    let title = req.body.title;
    let content = req.body.content;
    let params = [title, content, bid];
    dm.updateBbs(params, () => {
        res.redirect(`/bbs/bid/${bid}`);
    });
});

bRouter.post('/search', ut.isLoggedIn, (req, res) => {
    let keyword = '%' + req.body.keyword + '%';
    console.log(keyword);
    dm.getSearchList(keyword, rows => {
        let view = require('../view/bbsSearchList');
        let navBar = template.navBar(req.session.uname?req.session.uname:'개발자');
        let html = view.list(navBar, rows);
        res.send(html);
    })
});

module.exports = bRouter;
