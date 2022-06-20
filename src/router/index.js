import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import Home from '../components/Pages/Home.vue';
import Contact from '../components/Pages/Contact.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
