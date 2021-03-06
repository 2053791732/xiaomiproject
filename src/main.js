import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router/router.js'
// import env from './env'

// mock模拟数据开关
const mock = false;
if (mock) {
  require('./mock/api');
}

// 跨域方式代理跨域
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 接口错误拦截
// axios.interceptors.response.use(function(response){
//   let res = response.data;
//   if (res.status == 0) {
//     return res.data;
//   }else if (res.status == 10) {
//     window.location.href = '/#/login';
//   }else {
//     alert(res.msg);
//   }
// });

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')