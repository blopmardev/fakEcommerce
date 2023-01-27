import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductListView.vue')
  },
  {
    path: '/contacto',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */'../views/ContactView.vue')
  },
  {
    path: '/productos/producto/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */'../views/DetailView.vue'),
    props: (route) => {
      const id = Number(route.params.id)
      return isNaN(id) ? { id: null } : {id};
    },
  },
  {
    path: '/usuario/:id',
    name: 'user',
    component: () => import(/* webpackChunkName: "product" */'../views/UserView.vue'),
    props: (route) => {
      const id = Number(route.params.id);
      const userRole = localStorage.getItem('userRole');
      return isNaN(id) ? { id: null, userRole } : { id, userRole };
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
