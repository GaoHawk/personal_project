'use strict';

var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path');

var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);
    

var server = http.createServer(function(request, response) {
    
    console.log(request.method + ':' + request.url);

    response.writeHead(200,{'Content-Type':'text/html'});

    response.end('<h1>Hello world!</h>');
});

server.listen(8081);

console.log("Server is running at http://127.0.0.1:8081/");