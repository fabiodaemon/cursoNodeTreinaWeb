var http = require('http');

var server = http.createServer(function(req, resp){
    resp.writeHead(200, {'Content-Type': 'text/html'});

    resp.write('<h1>Hello World!</h1>');

    resp.end();
});

server.listen(3000);