import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Casino from '../pages/Casino.vue';
import Slot from '../pages/Slot.vue';
import Fishing from '../pages/Fishing.vue';
import Sport from '../pages/Sport.vue';
import Cards from '../pages/Cards.vue';
import Lottery from '../pages/Lottery.vue';
import Live from '../pages/Live.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/casino', component: Casino },
  {path : '/slot' , component : Slot},
  {path : '/fishing',component : Fishing},
  {path : '/sport', component : Sport},
  {path : '/cards',component : Cards},
  {path : "/lottery", component : Lottery},
  {path : '/live',component  : Live}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;