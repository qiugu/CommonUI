import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layouts/index.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'layouts',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: 'floating' */'../views/Home.vue')
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
      },
      {
        path: '/filter',
        name: 'filter',
        component: () => import(/* webpackChunkName: 'filter' */'../views/filterComp.vue')
      },
      {
        path: '/list',
        name: 'list',
        component: () => import(/* webpackChunkName: 'list' */'../views/listComp.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

export default router;
