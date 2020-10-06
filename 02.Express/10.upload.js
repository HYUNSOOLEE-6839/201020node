const express = require('express');
const bodyParser = require('body-parser')
const multipart = require('connect-multiparty')
const multer = require('multer')
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(multipart({uploadDir: __dirname+'/public/upload'}));
let upload = multer({dest : __dirname +'/public/upload'});

app.get('/', (req, res) => {
    fs.readFile('10.fileform.html','utf8',(error, data) => {
        res.send(data);
    });
});

app.post('/', (req,res) =>{
    let comment = req.body.comment;
    console.log(req.files);
    /* let filename = req.files.image.name;
    let filetype = req.files.image.type;
    let uploadPath = req.files.image.path
    console.log(req.files);
    console.log(filename, filetype);
    console.log(uploadPath); */
    /* //받은 파일이 이미지면 이름을 변경
if(filetype.indexOf('image')>=0) {
    let outputNmae = comment + filename;
    fs.rename(uploadPath, __dirname + '/public/upload'+outputName;
    fs.rename(uploadPath, newFileName, err => {
        res.send(`<h1>${newFileName}</h1>`);
    });
} else {
}
}); */

app.listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000');
});