export default [
  {
    name: 'Error',
    path: '/error',
    meta: {
      unauthorized: true
    },
    component: () => import(/* webpackChunkName: "error" */ './error')
  },
  {
    name: 'Login',
    path: '/',
    meta: {
      unauthorized: true
    },
    component: () => import(/* webpackChunkName: "login" */ './login')
  },
  {
    name: 'Login',
    path: '/login',
    meta: {
      unauthorized: true
    },
    component: () => import(/* webpackChunkName: "login" */ './login')
  }
]
