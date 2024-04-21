var http = require('http');
var fs = require('fs');

//This code got some import error
var uc = require('upper-case');

http.createServer(function(req, res){
    fs.readFile('demo_html.html', function(err, data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(uc.upperCase(data));
        return res.end();
    });
}).listen(8080);