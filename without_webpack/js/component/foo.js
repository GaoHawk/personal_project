/*
* @Author: Administrator
* @Date:   2017-02-09 15:36:54
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-09 15:56:45
*/

var Foo = {
     name:'Foo',
     template:`
     <div class="template">
      ${Header.template }
      Foo</div>
      `,
      methods:{

         back:function(){
            console.log('back')
            router.go(-1);
            app.showHome = !app.showHome;
            sessionStorage.showHome = app.showHome;
         }
      }
}
