const express = require('express');
const ut = require('./util')
const dm = require('./db/db.init')
const alert = require('./view/alertMsg')
const bRouter = express.Router();
bRouter.get('/',(req, res) => {
    dm.getAllList(rows =>{
        const view = require('./view/maintemplate')
        let html = view.mainForm(rows);
        res.send(html);
    })
});

bRouter.get('/list2', (req,res) => {
    dm.getnextList(rows => {
        const view = require('./list2')
        let html = view.mainForm(rows);
        res.end(html);
    });
});

bRouter.get('/bid/write', (req,res) => {
    dm.getWrite(rows => {
        const view = require('./write')
        let html = view.mainForm(rows);
        res.end(html);
    });
});

bRouter.post('/bid/write', (req,res) => {
    let title = req.body.title;
    let content = req.body.content;
    let uid = req.body.uid
    let params = [title, uid, content];
    dm.getWrite(params, () => {
        res.redirect('/bbs');
    })
});

bRouter.get('/bid/:bid', (req,res) => {
    let bid = parseInt(req.params.bid);
    console.log(bid);
    dm.getContents(bid, rows => {
        dm.incrementCount(bid, () => {
            const view = require('./contents')
            let html = view.viewForm(rows);
            console.log(rows);
            res.end(html);
        })
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
