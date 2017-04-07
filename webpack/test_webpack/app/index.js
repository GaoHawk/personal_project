/*
* @Author: Administrator
* @Date:   2017-01-05 14:07:38
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-04 10:32:55
*/
// var sub = require('./sub');
// var app = document.createElement('div');
// var $ = require('jquery');
// var moment = require('moment');

// require('./main.css');
// app.innerHTML = '<h1>Hello World</h1>';
// app.appendChild(sub());
// document.body.appendChild(app);
// $('body').append('<p>look at me! now is ' + moment().format() + '</p>')

import './main.css';
import generateText from './sub.js';
import $ from 'jquery';
import moment from 'moment';
import 'imports?jQuery=jquery!./plugin.js';

let app = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
 $('body').append('<p>promise result is '+number+' now is ' +moment().format() + '</p>');
 $('p').greenify();
});
app.innerHTML = '<h1>Hello World it</h1>'
document.body.appendChild(app);
app.appendChild(generateText());


let obj = {
   data: ['hello','world'],
   [Symbol.iterator]() {
     const self = this;
     let index = 0;
     return {
       next() {
          if(index < self.data.length) {
             return {
               value:self.data[index++],
               done:false
             };
          }else{
             return {value:undefined,done:true};
          }
       }
     }
   }
}
