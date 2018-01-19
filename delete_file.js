var fs = require('fs');

fs.unlink('C:/Users/Oshani Weerakoon/Documents/Node/Node-W3/file2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});