import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'Home'
    },
    {
      path: '/about',
      component: () => import('@/pages/AboutPage.vue'),
      name: 'About'
    }
  ]
})
// router
