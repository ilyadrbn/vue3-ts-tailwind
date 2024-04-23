import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      // not found
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/404Page.vue'),
      name: '404'
    },
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
