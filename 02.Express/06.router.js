const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public')); // 사진 불러오는 미드웨어, static은 경로 지정.
let shoppingRouter = express.Router();
let customerRouter = express.Router();
app.use('/shopping', shoppingRouter);
app.use('/customer', customerRouter);

app.get('/', function(request, response){
    response.send('<h1>Root Router</h1>');
});
shoppingRouter.get('/', function(request, response){
    response.send('<h1>Shopping Router</h1>');
});
shoppingRouter.get('/index', function(request, response){
    response.send('<h1>Shopping Router Index</h1>');
});
customerRouter.get('/', function(request, response){
    response.send('<h1>Customer Router</h1>');
});
customerRouter.get('/index', function(request, response){
    response.send('<h1>Customer Router Index</h1>');
});

app.get('*', function(request, response){
    response.status(404).send('path not found')
});

app.listen(3000, function(){
    console.log(
        "Server Running at http:// 127.0.0.1:3000");
});
