const express = require('express');
const ut = require('./util')
const dm = require('./db/db.init')
const alert = require('./view/alertMsg')
const uRouter = express.Router();
uRouter.get('/register',(req, res) => {
    const view = require('./view/userRegister')
    let html = view.register();
    res.send(html);
});

uRouter.post('/register', (req, res) => {
    let uid = req.body.uid;
    let pwd = req.body.pwd;
    let pwd2 = req.body.pwd2;
    let uname = req.body.uname;
    let tel = req.body.tel;
    let email = req.body.email;
    if(pwd !== pwd2){
        let html = alert.alertMsg('패스워드가 다릅니다.', '/user/register')
        res.send(html);
    } else {
        let pwdHash = ut.generateHash(pwd);
        let params = [uid, pwdHash, uname, tel, email];
        dm.registerUser(params, () => {
            res.redirect('/login');
        })
    }
});

dm.getAllLists('*', (req, res) => {
    
});

uRouter.get('/getInfo', (req,res) => {
    let uid = parseInt(req.params.uid);
    dm.getInfo(uid, rows => {
        const view = require('./userInfo')
        let html = view.InfoForm(rows);
        res.end(html);
    });
});

uRouter.get('/delete/:uid', (req, res) => {
    let uid = req.params.uid;
    console.log(uid);
    dm.deleteUser(uid, rows => {
        console.log(uid);
        res.redirect('/user/getInfo');
    });
});

uRouter.get('/update/:uid', (req, res) => {
    let uid = req.params.uid;
    console.log(uid);
    dm.updateUser(uid, rows => {
        const view = require('./view/update')
        let html = view.updateForm(rows);
        console.log(uid);
        res.send(html);
    });
});

uRouter.post('/update', (req, res) => {
    let uid = req.body.uid;
    let uname = req.body.uname;
    let tel = req.body.utel;
    let email = req.body.email;
    let params = [uid, uname, tel, email];
    dm.updateUser(params, uid => {
        res.redirect('/user/getInfo');
    });
});



module.exports = uRouter;

