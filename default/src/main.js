import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import {test} from './api/api'

//定义全局变量
Vue.prototype.$test=test;


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
