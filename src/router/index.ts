import { createRouter, createWebHistory } from 'vue-router'
import RandomTraining from '@/components/RandomTraining.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'random-training',
      component: RandomTraining,
    },
  ],
})

export default router
