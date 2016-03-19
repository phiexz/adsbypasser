var blanket = require('blanket');
blanket({
  pattern: '/src/util/',
});
var fs = require('fs');
if (!fs.existsSync('dest')) {
  fs.mkdirSync('dest', 0755);
}
