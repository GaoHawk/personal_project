/*
* @Author: Administrator
* @Date:   2016-08-15 15:08:10
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-31 15:45:38
*/

'use strict';
var http=require("http");
var server=http.createServer(function(req,res){
    if(req.url!=="/favicon.ico"){
        //res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"http://localhost:63342"});
        res.setHeader("Content-Type","text/plain");
        res.setHeader("Access-Control-Allow-Origin","http://localhost:63342");
        res.write("你好啊!");
    }
    res.end();
});
server.listen(1337,"localhost",function(){
    console.log("开始监听...");
});
