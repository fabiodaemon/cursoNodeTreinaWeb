var http = require('http');
var ls = require('fs');

var server = http.createServer(function(req, resp){

    ls.readFile('index.html', function(err, data){
        resp.writeHead(200, {'Content-Type': 'text/html'});
        resp.write(data);
        resp.end();
    })
});

server.listen(3000);