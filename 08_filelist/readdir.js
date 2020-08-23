var testFolder = './';
var fs = require('fs');

var args = process.argv;
if (args[2] != null) {
  testFolder += '/' + args[2];
}
fs.readdir(testFolder, function(error, filelist) {
  console.log(filelist);
});
