/*
* @Author: Administrator
* @Date:   2017-02-09 10:50:23
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-09 17:44:43
*/



 function mainFunction(routes){
       app = new Vue({
          data(){
             return{
                 navs:routes,
                 showHome:sessionStorage.showHome == undefined?true:eval(sessionStorage.showHome)
             }
          },
          methods:{
              goRoute:function(item){
                  console.log(item);
                  this.showHome = !this.showHome;
                  sessionStorage.showHome = this.showHome;
                  router.push({ path: item.path });
              }
          },
          router: router
        }).$mount('#app');
 }





