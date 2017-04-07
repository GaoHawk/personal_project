/*
* @Author: Administrator
* @Date:   2016-09-06 13:42:01
* @Last Modified by:   Administrator
* @Last Modified time: 2016-09-06 13:52:22
*/

'use strict';

var
      fs  = require('fs'),
      url = require('url'),
      path = require('path'),
      http = require('http');

var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);


