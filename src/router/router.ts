import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AutorRoutes from '../views/autor/index.route'
const routes: Array<RouteRecordRaw> = [...AutorRoutes]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
