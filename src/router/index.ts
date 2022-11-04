import { createRouter, createWebHistory } from 'vue-router'
import WrappedView from '../views/WrappedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'wrapped',
      component: WrappedView
    },
    {
      path: '/extended',
      name: 'extended',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExtendedView.vue')
    }
  ]
})

export default router
