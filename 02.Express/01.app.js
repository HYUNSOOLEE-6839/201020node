const express = require('express');

const app = express();

/* app.use(); - 미들웨어
app.get(); - get 방식
app.post(); - post 방식 */

app.use(function(request, response){
    let html = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Express</title>
    </head>
    <body>
        <h1>Welcome to Express World</h1>
    </body>
    </html>
    `
/*     response.writeHead(200, {'content-type' : 'text/html'});
    response.end('<h1>Hello express</h1>'); */
    response.send(html);
});

app.listen(3000, function(){
    console.log(
        "Server Running at http:// 127.0.0.1:3000"
    );
});

//const util, util.log 사용 시 deplicated 되고 결과는 날짜와 함께 출력.
// app.use(function(req,res){ })


