var fs = require('fs');

fs.rename('C:/Users/Oshani Weerakoon/Documents/Node/Node-W3/file2.txt', 'C:/Users/Oshani Weerakoon/Documents/Node/Node-W3/renamed_file.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});