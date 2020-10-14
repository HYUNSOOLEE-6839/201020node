const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const Filestore = require('session-file-store')(session);
const uRouter = require('./userRouter');
const fs = require('fs')

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

app.get('/', (req, res) => {
    res.redirect('/login');
})

app.get('/login', (req, res) => {
    fs.readFile('./view/0.index.html', 'utf8', (error, html) => {
        res.send(html);
    });
    /* const view = require('./view/test')
    let html = view.test();
    res.send(html); */
})

app.listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000');
});