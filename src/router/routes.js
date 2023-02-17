
const routes = [
  {
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {
        path: '',
        name: 'LoginPage',
        component: () => import('pages/LoginPage.vue'),
      },

    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), name:"dashboard" },
      {path: '/appeals', component: () => import('pages/AppealsPage.vue'), name:"appeals" },
      {path: '/operators', component: () => import('pages/OperatorsPage.vue'), name:"operators" },
      {path: '/settings', component: () => import('pages/SettingsPage.vue'), name:"settings" },
      {path: '/help', component: () => import('pages/HelpPage.vue'), name:"help" },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
]

export default routes
