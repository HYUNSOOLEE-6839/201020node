var http = require('http');
var jade = require('jade');
var fs = require('fs');

http.createServer(function(request,response){
    fs.readFile('03.Jade.jade', 'utf8', function(error, data){
        var fn = jade.compile(data)
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end(fn());
    });
}).listen(3000, function (){
    console.log('Server Running at http://127.0.0.1:3000');
});

