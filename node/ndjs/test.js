/*
* @Author: Administrator
* @Date:   2016-08-04 18:04:09
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-04 18:09:28
*/

'use strict';
var fs = require("fs");
fs.readFile('test.txt', function(err, data){
      if(err) return console.error(err);
      console.log(data.toString());
});
console.log("Program Ended");
