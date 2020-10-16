const express = require('express');
const ut = require('./util')
const dm = require('./db/db.init')
const alert = require('./view/alertMsg')
const bRouter = express.Router();
bRouter.get('/bbs',(req, res) => {
    const view = require('./view/maintemplate')
    let html = view.main();
    res.send(html);
        });


module.exports = bRouter
