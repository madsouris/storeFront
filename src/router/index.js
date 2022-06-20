import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import MainContent from '../components/Layout/MainContent.vue';
import Contact from '../components/Pages/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainContent,
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
