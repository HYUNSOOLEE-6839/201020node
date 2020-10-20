const express = require('express');
const ut = require('./util')
const dm = require('./db/db.init')
const alert = require('./view/alertMsg');
const template = require('./view/maintemplate');
const bRouter = express.Router();


bRouter.get('/list/:page', ut.isLoggedIn, (req, res) => {
    let page = parseInt(req.params.page);
    req.session.currentPage = page;
    let offset = (page - 1) * 10;
    dm.getBbsTotalCount(rows => {
        let totalPage = Math.ceil(rows.count / 10);
        let startPage = Math.floor((page-1)/10)*10 + 1;
        let endPage = Math.ceil(page/10)*10;
        endPage = (endPage > totalPage) ? totalPage : endPage;
        dm.getBbsList(offset, rows => {
            let view = require('./list');
            let navBar = template.navBar(req.session.uname?req.session.uname:'관리자');
            let html = view.mainForm(navBar, rows, page, startPage, endPage, totalPage);
            res.send(html);
        })
    });
});


/* bRouter.get('/list/1',(req, res) => {
    dm.getAllList(rows =>{
        const view = require('./list')
        let html = view.mainForm(rows);
        res.send(html);
    })
});

bRouter.get('/list/2', (req,res) => {
    dm.getnextList(rows => {
        const view = require('./list2')
        let html = view.mainForm(rows);
        res.end(html);
    });
}); */

bRouter.get('/bid/write', ut.isLoggedIn, (req,res) => {
    /* dm.getWrite(rows => { */
        const view = require('./write')
        let navBar = template.navBar(req.session.uname?req.session.uname:'${uname}');
        let html = view.mainForm(navBar);
        res.send(html);
    });
/* }); */

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
                const view = require('./contents')
                let navBar = template.navBar(req.session.uname?req.session.uname:'개발자');
                let html = view.viewForm(navBar, rows, replies);
            res.end(html);
            });
        });
    });
});

bRouter.get('/delete/:bid', (req, res) => {
    let bid = parseInt(req.params.bid);
    console.log(bid);
    dm.getDelete(bid, rows => {
        console.log(bid);
        res.redirect('/bbs');
    });
});



module.exports = bRouter;
