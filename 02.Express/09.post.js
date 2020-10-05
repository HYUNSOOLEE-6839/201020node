const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res) => {
    res.send('<h1>3초 후에 로그인 페이지로 이동합니다.<h1>');
    res.redirect('/login');
    /* setTimeout(()=> {
        res.redirect('/login');
    }, 3000); */
});
app.get('/login', (req, res) => {
    fs.readFile('09.loginform.html','utf8',(error, data) => {
        res.send(data);
    });
});

app.post('/login', (req,res) =>{
    let uid = req.body.uid;
    let pwd = req.body.pwd;
    if (uid === 'park' && pwd === '1234')
        res.send(`<h1>Login Success</h1><br>`);
     else 
        res.redirect('/login')
});

app.listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000');
});