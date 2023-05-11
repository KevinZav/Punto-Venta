export const appRoutes = [
  {
    path: '',
    redirect: 'testing'
  },
  {
    path: '/testing',
    name: 'testing',
    component: () => import('@/app/pages/testing/TestingPage.vue')
  }
]