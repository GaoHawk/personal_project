/*
* @Author: Administrator
* @Date:   2017-02-09 16:04:24
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-09 16:05:00
*/

var Toast = {
     name:'Toast',
     template:`
     <div class="template">
      <mt-button @click.native="handleClick">Button</mt-button></div>
      `,
      methods:{
         handleClick:function(){
            this.$toast('Hello world!')
         }
      }
}
