const express = require('express');
const morgan = require('morgan');

let app = express();

/* app.use(morgan('combined')); */
//app.use(morgan(':method + :date + :remote-addr'))
app.use(morgan('short'));
app.use(function(request, response){
    response.send('<h1>Morgan Middleware</h1>')
});

app.listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000');
});