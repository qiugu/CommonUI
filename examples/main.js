// import 'core-js'
import Vue from 'vue'
import App from './App.vue'
import router from './route.config'
// import businessui from '../lib/business.common'
import businessui from '../src/index.js'

Vue.config.productionTip = false;
Vue.use(businessui)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
