export const authRoutes = [
  {
    path: '',
    name: 'auth-index',
    redirect: { name: 'auth-login' }
  },
  {
    path: '/auth/login',
    name: 'auth-login',
    component: () => import('./Login/LoginPage.vue')
  }
]