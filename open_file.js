var fs = require('fs');

fs.open('C:/Users/Oshani Weerakoon/Documents/Node-W3/file.html', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});