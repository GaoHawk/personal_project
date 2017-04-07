/*
* @Author: Administrator
* @Date:   2016-12-30 16:05:37
* @Last Modified by:   Administrator
* @Last Modified time: 2016-12-30 16:45:10
*/

'use strict';
import Vue from 'vue';
import AMap from 'vue-amap';
import App from './App.vue';

Vue.use(AMap);
AMap.initAMapApiLoader({
  key: '4939f20cc60ba84508d5c3e94969d549',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

new Vue({
  el: '#app',
  render: h => h(App)
})
