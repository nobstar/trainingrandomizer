import { createRouter, createWebHashHistory } from 'vue-router'
import MenuView from '@/views/MenuView.vue'
import ExerciseView from '@/views/ExerciseView.vue'
import StatisticsView from '@/views/StatisticsView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: MenuView,
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: ExerciseView,
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatisticsView,
    },
  ],
})

export default router
