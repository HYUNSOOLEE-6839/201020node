const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const view = require('./view/index_image');
const template = require('./view/template_image');
const multipart = require('connect-multiparty')

const app = express();
app.use(express.static(__dirname + '/public/fileWebImage'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multipart({uploadDir: __dirname+'/public/fileWebImage'}));

app.get('/', (req, res)=> {
    fs.readdir('data', function(error, filelist) {
        let list = template.listGen(filelist);
        let content = template.HOME_CONTENTS; //입력창에서 br을 엔터로 치환
        content = content.replace(/\n/g, '<br>');
        let control = template.buttonGen();
        let html = view.index('Web', list, content, control, true);
        res.send(html);
    });
});

app.get('/id/:id', (req, res) => { // 'id/:id' 와 같은 식으로 오면 params로 받아야함.
    fs.readdir('data', function(error, filelist) {
        let list = template.listGen(filelist);
        let title = req.params.id;
        let control = template.buttonGen(title);
        let filename = 'data/' + title + '.txt';
        fs.readFile(filename, 'utf8', (error, buffer) => {
            buffer = buffer.replace(/\n/g, '<br>'); //입력창에서 br을 엔터로 치환
            let html = view.index(title, list, buffer, control, true);
            res.send(html);
        });
    });
});

app.get('/create', (req,res)=> {
    fs.readdir('data', function(error, filelist) {
        let list = template.listGen(filelist);
        let control = template.buttonGen();
        let content = template.createForm();
        let html = view.index('글 생성', list, content, control, false);
        res.send(html);
    });
});

app.post('/create', (req,res)=> {
    let subject = req.body.subject;
    let description = req.body.description;
    let filepath = 'data/' + subject + '.txt';
    fs.writeFile(filepath, description, error => {
                // 이미지 처리
        let imageName = subject + '.jpg';
        let uploadPath = req.files.image.path;
        let newFileName = __dirname + '/public/fileWebImage' + imageName;
        fs.rename(uploadPath, newFileName, error => {
            res.redirect(`/id/${subject}`);
        })
    });
});

app.get('/delete/id/:id',(req,res)=> {
    fs.readdir('data', function(error, filelist) {
        let list = template.listGen(filelist);
        let content = template.deleteForm(req.params.id);
        let control = template.buttonGen();
        let html = view.index('글 삭제', list, content, control, false);
        res.end(html);
    });
});

app.post('/delete', (req,res)=> {
    let filepath = 'data/' + req.body.subject + '.txt';
    let imagepath = 'public/fileWebImage/' + req.body.subject + '.jpg';
        fs.unlink(filepath, error => {
            fs.unlink(imagepath, error => {
                res.redirect('/')
            });
    });
});

app.get('/update/id/:id',(req,res)=> {
    fs.readdir('data', function(error, filelist) {
    let list = template.listGen(filelist);
    let title = req.params.id;
    let control = template.buttonGen();
    let filename = 'data/' + title + '.txt';
    fs.readFile(filename, 'utf8', (error, buffer) => {
        let content = template.updateForm(title, buffer);
        let html = view.index(title, list, content, control, true);
        res.end(html);
        });
    });
});

app.post('/update', (req,res)=> {
    let original = req.body.original
    let subject = req.body.subject
    let description = req.body.description
    let filepath = 'data/' + original + '.txt';
    let imagePath = 'public/fileWebImage/' + original + '.jpg';
            fs.writeFile(filepath, description, error => {
            if(original !== subject) { // 제목이 바뀐 경우 처리
            fs.renameSync(filepath, `data/${subject}.txt`);
            fs.renameSync(imagePath, `public/fileWebImage/${subject}.jpg`)
            }
            console.log(req.files);
            let uploadType = req.files.image.type;
            let uploadPath = req.files.image.path;
            if(uploadType.indexOf('image') >= 0){
                let imageName = subject + '.jpg';
                let uploadPath = req.files.image.path;
                let newFileName = __dirname + '/public/fileWebImage' + imageName;
                fs.rename(uploadPath, newFileName, error => {
                    res.redirect(`/id/${subject}`);
                });
            } else { // 이미지가 아닌 경우 업로드 파일 삭제
                fs.unlink(uploadPath, error => {
                    res.redirect(`/id/${subject}`);
                });
            }
    });
});

app.get('*', function(request, response){
    response.status(404).send('path not found')
});

app.listen(3000, function(){
    console.log(
        "Server Running at http:// 127.0.0.1:3000");
});