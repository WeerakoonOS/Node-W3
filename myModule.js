var http = require('http');
var dt = require('C:/Users/Oshani Weerakoon/Documents/Node/Node-W3/firstModule');
//absolute path, can require absolute within npm_module folder
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);