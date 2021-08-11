export default [
  {
    name: 'Customer',
    path: '/customer',
    component: () => import(/* webpackChunkName: "customer" */ './customer')
  }
]
