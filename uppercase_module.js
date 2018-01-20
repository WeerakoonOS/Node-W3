var http = require('http');
var uc = require('upper-case');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("Hello World!"));//using uppercase module
    res.end();
}).listen(8080);