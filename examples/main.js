import Vue from 'vue';
import App from './App.vue';
import router from './router';
import businessui from '../lib/main';

Vue.config.productionTip = false;
Vue.use(businessui)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
