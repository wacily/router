// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store/index'
import vueResource from 'vue-resource'

//引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'

//引入Element-Ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.use(vueResource)

//导入iview
Vue.use(iView)

//导入Element-Ui
Vue.use(ElementUI)

// //添加请求拦截器
// axios.interceptors.request.use(
//   function(config){ //在发送请求之前做些什么
//     return config;
//   },
//   function(error){ //对请求错误做些什么
//     return Promise.reject(error);
//   }
// );

// //添加响应拦截器
// axios.interceptors.response.use(
//   function(response){ //对响应数据做点什么
//     return response;
//   },
//   function(error){ //对响应错误做点什么
//     //store.commit('alertError',"Error：" + error.response.statusText + "，HttpCode = " + error.response.status);
//     store.commit('alertError',"Error：" + error.msg);
//     console.log("-------------------------begin-------------------------")
//     console.log(error);
//     console.log("-------------------------end---------------------------")
//     return Promise.reject(error);
//   }
// )

//Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
