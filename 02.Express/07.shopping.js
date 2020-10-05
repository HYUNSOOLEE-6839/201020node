const express = require('express');

const shoppingRouter = express.Router();
shoppingRouter.get('/', function(request, response){
    response.send('<h1>Shopping Router</h1>');
});
shoppingRouter.get('/index', function(request, response){
    response.send('<h1>Shopping Router Index</h1>');
});
module.exports = shoppingRouter;