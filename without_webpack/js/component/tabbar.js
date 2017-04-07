/*
* @Author: Administrator
* @Date:   2017-02-09 15:50:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-09 15:51:05
*/

'use strict';
var Tabbar = {
     template: `
     <mt-tabbar v-model="selected" fixed>
       <mt-tab-item id="外卖">
         <img slot="icon" src="../assets/100x100.png">
         外卖
       </mt-tab-item>
       <mt-tab-item id="订单">
         <img slot="icon" src="../assets/100x100.png">
         订单
       </mt-tab-item>
       <mt-tab-item id="发现">
         <img slot="icon" src="../assets/100x100.png">
         发现
       </mt-tab-item>
       <mt-tab-item id="我的">
         <img slot="icon" src="../assets/100x100.png">
         我的
       </mt-tab-item>
     </mt-tabbar>
      `
}
