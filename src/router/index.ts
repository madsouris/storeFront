import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Pages/Home.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/Pages/Contact.vue'),
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../components/Pages/ProductView.vue'),
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../components/Pages/Terms.vue'),
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../components/Pages/Privacy.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
