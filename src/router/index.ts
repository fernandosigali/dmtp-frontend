import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WorkoutView from '@/views/WorkoutView.vue'
import MealsView from '@/views/MealsView.vue'


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
    ]
    },
  ]
})

export default router
