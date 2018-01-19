var fs = require('fs');

fs.appendFile('C:/Users/Oshani Weerakoon/Documents/Node-W3/append_file.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
//append content to existing file, create new file with content