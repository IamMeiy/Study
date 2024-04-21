var http = require('http');//http module
var url = require('url');//URL module
var fs = require('fs');//file-sytem Module

http.createServer(function(req, res){

    var q = url.parse(req.url, true);

    var filename = "." + q.pathname + ".html";

    fs.readFile(filename, function(err, data){

        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 Page not Found");
        }

        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();

    });
    
}).listen(8080);