const express = require('express');

const app = express();

//localhost:3000/query?id=kim
app.get('/query', function(request, response){
    let id = request.query.id;
    response.send(`<h1>id-${id}</h1>`);
});
    /* let html = `
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
    `;
    response.send(html);
}); */
// localhhost:3000/rest/id/kim
app.get('/rest/id:/id', function(request, response){
    let id = request.params.id;
    response.send(`<h1>id-${id}</h1>`);
});
// localhhost:3000/rest2/id/kim
app.get('/rest2/:/id', function(request, response){
    let id = request.params.id;
    response.send(`<h1>id-${id}</h1>`);
});

app.get('*', function(request, response){
    response.status(404).send('path not found')
});

app.listen(3000, function(){
    console.log(
        "Server Running at http:// 127.0.0.1:3000"
    );
});