
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
      { path: '', component: () => import('pages/IndexPage.vue'), name:"Dashboard" },
      {path: '/appeals', component: () => import('pages/AppealsPage.vue'), name:"Appeals" },
      {path: '/operators', component: () => import('pages/OperatorsPage.vue'), name:"Operators" },
      {path: '/settings', component: () => import('pages/SettingsPage.vue'), name:"Settings" },
      {path: '/help', component: () => import('pages/HelpPage.vue'), name:"Help" },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
]

export default routes
