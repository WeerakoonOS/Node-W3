var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write(req.url); part of url after domain name
    res.end('Hello World!');
}).listen(8080);