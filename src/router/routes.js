
const routes = [
  {
    path: '/',
    component: () => import('layouts/NewLayout.vue'),
    children: [
      { path: '', redirect: '/home' },
      { path: 'home', component: () => import('pages/Homepage.vue') },
      { path: 'patient', component: () => import('pages/Patient.vue') }
    ]
  },
  {
    path: '/locked',
    component: () => import('layouts/Lockscreen.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
