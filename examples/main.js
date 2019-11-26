import Vue from 'vue';
import App from './App.vue';
import router from './router';
import commonui from '../src/index';

Vue.config.productionTip = false;
Vue.use(commonui)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
