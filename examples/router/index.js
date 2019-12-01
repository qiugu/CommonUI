import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/floating',
    name: 'floating',
    component: () => import(/* webpackChunkName: 'floating' */'../views/floatingComp.vue')
  },
  {
    path: '/drawer',
    name: 'drawer',
    component: () => import(/* webpackChunkName: 'drawer' */'../views/drawerComp.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

export default router;
