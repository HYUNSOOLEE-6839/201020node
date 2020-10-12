const express = require('express');
const bodyParser = require('body-parser');
const dm = require('./db/db.module 과제');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res) => {
    dm.getAllLists(rows => {
        const view = require('./view/list 과제')
        let html = view.mainForm(rows);
        res.end(html);
    });
});

app.get('/insert', (req, res) => {
    const view = require('./view/insert 과제');
    let html = view.insertForm();
    res.send(html);
});

app.post('/insert', (req,res) =>{
    let NAME = req.body.NAME;
    let debut = req.body.debut;
    let hit_song_id = req.body.hit_song_id;
    let params = [NAME, debut, hit_song_id];

    dm.insertGroup(params, () => {
        res.redirect('/');
    })
});

app.get('/delete/:sid', (req, res) => {
    let sid = parseInt(req.params.sid);
    console.log(sid);
    dm.deleteGroup(sid, ()=> {
        res.redirect('/');
    });
});

app.get('/update/:sid', (req, res) => {
    let sid = parseInt(req.params.sid);
    dm.getGroup(sid, resulT => {
        const view = require('./view/update 과제')
        let html = view.updateForm(resulT);
        res.send(html);
    });
});

app.post('/update', (req, res)=>{
    let sid = parseInt(req.body.sid);
    let NAME = req.body.NAME;
    let debut = req.body.debut;
    let hit_song_id = req.body.hit_song_id;
    let params = [sid, NAME, debut, hit_song_id];

    dm.updateGroup(params, () => {
        res.redirect('/');
    });
});

app.listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000');
});

// update 위해 4개 파일 고침 1. mainlist화면 수정 2. mvc.js 3. view/update.js 4. db-module