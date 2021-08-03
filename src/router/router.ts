import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router
import CertificationRoutes from '../views/certification/index.route''

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    meta: {
      unauthorized: true
    },
    component: () => import('@/views/login/index.vue')
  }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
