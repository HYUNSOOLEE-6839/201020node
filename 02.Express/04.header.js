const express = require('express');

const app = express();

//localhost:3000/query?id=kim
app.get('/', function(request, response){
    let agent = request.header('User-Agent');

    if(agent.toLowerCase().match(/chrome/)){
    response.send(`크롬 브라우저입니다.`);
    } else {
        response.send(`크롬 브라우저가 아닙니다.`);
    }
});

app.get('*', function(request, response){
    response.status(404).send('path not found')
});

app.listen(3000, function(){
    console.log(
        "Server Running at http:// 127.0.0.1:3000");
});