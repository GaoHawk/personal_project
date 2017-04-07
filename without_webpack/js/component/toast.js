/*
* @Author: Administrator
* @Date:   2017-02-09 11:51:47
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-09 15:57:02
*/
var Toast = {
     name:'Toast',
     template:`
     <div class="template">
      ${Header.template }
      <mt-button @click.native="handleClick">Button</mt-button></div>
      `,
      methods:{
         handleClick:function(){
            this.$toast('Hello world!')
         },
         back:function(){
            console.log('back')
            router.go(-1);
            app.showHome = !app.showHome;
            sessionStorage.showHome = app.showHome;
         }
      }
}
