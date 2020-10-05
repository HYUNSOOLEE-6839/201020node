const express = require('express');
const favicon = require('express-favicon')
const app = express();
app.use(express.static(__dirname + '/public')); // 사진 불러오는 미드웨어, static은 경로 지정.
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function(request, response){
    let html = `
    <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express</title>
        </head>
        <body>
            <h1>Static Image</h1>
            <hr>
            <img src="/cat.jpg" alt="고양이">
            <img src="/img/dog.jpg" alt="강아지">
        </body>
        </html>
    `;
    response.send(html);
});

app.get('*', function(request, response){
    response.status(404).send('path not found')
});

app.listen(3000, function(){
    console.log(
        "Server Running at http:// 127.0.0.1:3000");
});

// img나 path는 '/'로부터 시작하게