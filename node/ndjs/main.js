/*
* @Author: Administrator
* @Date:   2016-08-08 14:02:32
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-13 10:34:24
*/

'use strict';
var fs = require('fs');
var zlib = require("zlib");

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成");


