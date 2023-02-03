import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WorkoutView from '@/views/WorkoutView.vue'
import MealsView from '@/views/MealsView.vue'
import MacrosView from '@/views/MacrosView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'workout',
          name: 'workout',
          component: WorkoutView,
        },
        {
          path: 'meals',
          name: 'meals',
          component: MealsView,
        },
        {
          path: 'macros',
          name: 'macros',
          component: MacrosView,
        },
    ]
    },
  ]
})

export default router
