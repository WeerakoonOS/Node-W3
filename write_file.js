var fs = require('fs');

fs.writeFile('C:/Users/Oshani Weerakoon/Documents/Node-W3/file2.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});