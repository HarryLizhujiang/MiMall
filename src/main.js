import Vue from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import App from './App.vue'
import 'animate.css'
import './util/rem.js'
Vue.config.productionTip = false
Vue.prototype.axios = axios
// 根据前端的跨域方式做调整 
axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/296470/api'
// 超时时间
axios.defaults.timeout = "8000";
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 200){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login'
  }else{
    alert(res.msg);
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
