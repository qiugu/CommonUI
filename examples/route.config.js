import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './layouts/index.vue'

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
        component: () => import(/* webpackChunkName: 'floating' */'./docs/index.md')
      },
      {
        path: '/floating',
        name: 'floating',
        component: () => import(/* webpackChunkName: 'floating' */'./docs/floating.md')
      },
      {
        path: '/drawer',
        name: 'drawer',
        component: () => import(/* webpackChunkName: 'drawer' */'./docs/drawer.md')
      },
      {
        path: '/filter',
        name: 'filter',
        component: () => import(/* webpackChunkName: 'filter' */'./docs/filter.md')
      },
      {
        path: '/list',
        name: 'list',
        component: () => import(/* webpackChunkName: 'list' */'./docs/list.md')
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
