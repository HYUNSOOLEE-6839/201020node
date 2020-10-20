const express = require('express');
const ut = require('./util')
const dm = require('./db/db.init')
const alert = require('./view/alertMsg')
const uRouter = express.Router();

uRouter.get('/user/getInfo', ut.isLoggedIn, (req, res) => {
    if (req.session.uid === 'admin') {
        res.redirect('/bbs');
    } else {
        res.redirect(`/user/update/${req.session.uid}`);
    }
});

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

uRouter.get('/delete/:uid', ut.isLoggedIn, (req, res) => {
    let uid = req.params.uid;
    if (req.session.uid !== 'admin') {
        let html = alert.alertMsg('삭제 권한이 없습니다.', `/bbs`);
        res.send(html);
    } else {
        let view = require('./view/userDelete');
        let html = view.delete(uid);
        res.send(html);
    }
});

uRouter.get('/deleteConfirm/:uid', ut.isLoggedIn, (req, res) => {
    let uid = req.params.uid;
    dm.deleteUser(uid, () => {
        res.redirect('/user/getInfo');
    });
});

uRouter.get('/update/:uid', ut.isLoggedIn, (req, res) => {
    let uid = req.params.uid;
    if (uid != req.session.uid) {
        let html = alert.alertMsg('수정 권한이 없습니다.', `/bbs`);
        res.send(html);
    } else{
        dm.getUser(uid, rows => {
        const view = require('./view/update')
        let html = view.updateForm(rows);
        console.log(uid);
        res.send(html);
        });
    }
});

uRouter.post('/update', ut.isLoggedIn, (req, res) => {
    let uid = req.body.uid;
    let pwdHash = req.body.pwdHash;
    let pwd = req.body.pwd;
    let pwd2 = req.body.pwd2;
    let uname = req.body.uname;
    let tel = req.body.tel;
    let email = req.body.email;
    if (pwd && pwd !== pwd2) {
        let html = alert.alertMsg('패스워드가 다릅니다.', `/user/update/${uid}`);
        res.send(html);
    } else {
        if (pwd)
            pwdHash = ut.generateHash(pwd);
        let params = [pwdHash, uname, tel, email, uid];
    dm.updateUser(params, () => {
        res.redirect('/user/getInfo');
        });
    }
});



module.exports = uRouter;

