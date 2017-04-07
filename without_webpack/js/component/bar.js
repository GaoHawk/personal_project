/*
* @Author: Administrator
* @Date:   2017-02-09 15:45:20
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-09 15:56:35
*/

var Bar = {
     name:'Bar',
     template:`
     <div class="template">
      ${Header.template }
      Bar
      ${Tabbar.template }
      </div>
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
