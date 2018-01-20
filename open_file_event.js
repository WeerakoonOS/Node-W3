var fs = require('fs');
var rs = fs.createReadStream('C:/Users/Oshani Weerakoon/Documents/Node/Node-W3/file2.txt');
rs.on('open', function () {
  console.log('The file is open');
});