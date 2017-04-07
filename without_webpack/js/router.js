/*
* @Author: Administrator
* @Date:   2017-02-09 10:50:29
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-09 17:41:34
*/

document.write('<script src="js/component/header.js"><\/script>')
document.write('<script src="js/component/tabbar.js"><\/script>')
document.write('<script src="js/component/foo.js"><\/script>')
document.write('<script src="js/component/bar.js"><\/script>')
document.write('<script src="js/component/toast.js"><\/script>')

document.onreadystatechange = loadingRouteChange;//当页面加载状态改变的时候执行这个方法.
        function loadingRouteChange()
        {
            if(document.readyState == "complete"){ //当页面加载状态为完全结束时进入
                  route();//当页面加载完成后将loading页隐藏
            }
        }

function route(){
   console.log(1);
  var routes = [{ path: '/foo', component: Foo }, { path: '/bar', component: Bar },{ path: '/toast',component:Toast }
  ];

  router = new VueRouter({
    routes: routes
  });
  mainFunction(routes);
}

