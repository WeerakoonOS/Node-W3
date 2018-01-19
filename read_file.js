var http = require('http');
var fs = require('fs');//requires file system module

http.createServer(function (req, res) {
  fs.readFile('C:/Users/Oshani Weerakoon/Documents/Node-W3/file.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);