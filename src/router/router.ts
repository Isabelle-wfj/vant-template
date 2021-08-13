import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CertificationRoutes from '../views/certification/index.route'
import ExamplesRoutes from '../views/examples/index.route'
const routes: Array<RouteRecordRaw> = [
  ...ExamplesRoutes,
  ...CertificationRoutes
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
