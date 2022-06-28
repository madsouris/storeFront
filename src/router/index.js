import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import Home from '../components/Pages/Home.vue';
import Contact from '../components/Pages/Contact.vue';
import ProductView from '../components/Pages/ProductView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: ProductView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
