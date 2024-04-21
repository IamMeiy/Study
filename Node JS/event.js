var fs = require('fs');
var rs = fs.createReadStream('./read.txt');

rs.on('open', function(){
    console.log("The file is read");
});