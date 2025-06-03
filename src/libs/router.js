import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/casino', component: About },
  { path: '/fishing', component: About },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;