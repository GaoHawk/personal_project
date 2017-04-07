/*
* @Author: Administrator
* @Date:   2016-08-17 11:51:32
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-18 13:44:43
*/
var obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

var { p: [x, { y }] } = obj;
console.log(x);
console.log(y);

