/* require('http').createServer(function(request,response){
    if (request.url == '/'){
        response.write('<!DOCTYPE html');
        response.write('<html>');
        response.write('<head>');
        response.write('    <title>Forever</title>');
        response.write('</head>');
        response.write('<body>')
        response.write('    <h1>Forever</h1>')
        response.write('</body>')
        response.write('</html>')
        response.end();
    } else{
        error.error.error();
    }
}).listen(52273, function(){
    console.log('Server running at http://127.0.0.1:3000');
}); */


require('http').createServer(function(request, response){
    if (request.url === '/' ||request.url === '/favicon.ico'){
        let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Forever</title>
        </head>
        <body>
            <h1>Forever</h1>
        </body>
        </html>
        `;
    response.end(html);
} else {
    error.error.error();
}
}).listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000');
});