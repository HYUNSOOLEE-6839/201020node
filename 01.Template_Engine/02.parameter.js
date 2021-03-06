const http = require('http')
const fs = require('fs')
const ejs = require('ejs')

http.createServer(function(request,response){
    fs.readFile('02.ejsPage.ejs', 'utf8', function(error, data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(ejs.render(data, {
            name : 'RinTanTta',
            description : 'Hello ejs with NodeJs ...'
        }));
    });
}).listen(3000, function(){
    console.log('Server Running at http://127.0.0.1:3000')
});