/*
* @Author: Administrator
* @Date:   2017-01-05 17:28:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-01-05 17:29:14
*/

'use strict';
(function($) {
    const shade = "#556b2f";
    $.fn.greenify = function(){
        this.css("color",shade);
        return this;
    };
}(jQuery));
