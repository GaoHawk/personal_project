/*
* @Author: Administrator
* @Date:   2016-08-13 10:34:50
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-13 10:36:29
*/

'use strict';
var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream('input.txt.gz').
    pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log("文件解压完成");
