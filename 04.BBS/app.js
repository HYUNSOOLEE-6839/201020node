const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const Filestore = require('session-file-store')(session);
const uRouter = require('./userRouter');
const bRouter = require('./bbsRouter')
const fs = require('fs')
const alert = require('./view/alertMsg')
const dm = require('./db/db.init')
const ut = require('./util')



const app = express();
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/popper', express.static(__dirname + '/node_modules/@popper.js/core/dist/umd'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
    secret: '1q2w3e4r5t6y',
    resave: false,
    saveUninitialized: true,
    store: new Filestore({LogFn: function(){}})
}));
app.use('/user', uRouter);
app.use('/bbs', bRouter);

app.get('/', (req, res) => {
    
    res.redirect('/login');
})


app.get('/login', (req, res) => {
    fs.readFile('./view/0.index.html', 'utf8', (error, html) => {
        res.send(html);
    });
})

app.post('/login', (req, res) => {
    let uid = req.body.uid;
    let pwd = req.body.pwd;
    let pwdHash = ut.generateHash(pwd);
    dm.getUserInfo(uid, result => {
        if (result === undefined) {
            let html = alert.alertMsg(`Login 실패 : uid ${uid}이/가 없습니다.`, '/login') // alert 창에는 1줄만 와야함. 2줄 이상 올 시 error 발생.
            res.send(html);
        } else {
            if (result.pwd === pwdHash){
                req.session.uid = uid;
                req.session.uname = result.uname;
                console.log('Login 성공');
                req.session.save(function(){
                    res.redirect('/bbs');
                });
            } else {
                let html = alert.alertMsg('Login 실패 : 패스워드가 다릅니다.','/login' )
                res.send(html);
            }    
        }
    });
});


app.listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000');
})
