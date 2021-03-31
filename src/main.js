import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from './api/requst'
import apis from './api/apis'

// element-ui 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, {
  sise:"small"
});

// 网络请求
Vue.prototype.$axios = axios
// 接口api
Vue.prototype.$apis = apis

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
