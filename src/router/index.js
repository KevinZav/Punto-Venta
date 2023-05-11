import { appRoutes } from '@/app/router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  ...appRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
