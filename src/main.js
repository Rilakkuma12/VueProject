import Vue from 'vue'
import App from './App.vue'
//导入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入router
import router from "./router";
Vue.use(router)

//导入axios
// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

