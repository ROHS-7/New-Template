import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Casino from '../pages/Casino.vue';
import Slot from '../pages/Slot.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/casino', component: Casino },
  {path : '/slot' , component : Slot}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;