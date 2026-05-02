import { createRouter, createWebHashHistory } from 'vue-router'
import RandomTraining from '@/components/RandomTraining.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'random-training',
      component: RandomTraining,
    },
  ],
})

export default router
