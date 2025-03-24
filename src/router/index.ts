import { createRouter, createWebHistory } from 'vue-router'
import { authMiddleware } from '@/middleware/auth'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/views/SignUp.vue'),
  },
  {
    path: '/dashboard',
    name: 'UserDashboard',
    component: () => import('@/views/Dashboard.vue'),
    beforeEnter: authMiddleware,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
