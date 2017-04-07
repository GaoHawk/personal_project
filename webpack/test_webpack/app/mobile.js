/*
* @Author: Administrator
* @Date:   2017-01-05 18:14:59
* @Last Modified by:   Administrator
* @Last Modified time: 2017-01-05 18:17:49
*/

import './main.css';
import $ from 'jquery';
import 'imports?jQuery=jquery!./plugin.js';

$(document).ready(function(){
   let app = document.createElement('div');
   app.innerHTML = '<h1>Hello World</h1>';
   document.body.appendChild(app);
   $('h1').greenify();
})
