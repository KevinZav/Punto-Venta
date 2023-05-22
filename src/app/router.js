import { authRoutes } from './pages/auth/router';

export const appRoutes = [
  {
    path: '',
    redirect: 'testing'
  },
  {
    path: '/testing',
    name: 'testing',
    component: () => import('@/app/pages/testing/TestingPage.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/app/pages/auth/AuthPage.vue'),
    children: authRoutes
  }
]