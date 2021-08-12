import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CertificationRoutes from '../views/certification/index.route'
const routes: Array<RouteRecordRaw> = [...CertificationRoutes]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
