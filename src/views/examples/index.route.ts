export default [
  {
    name: 'BaseFormDetail',
    path: '/base-form-detail',
    component: () =>
      import(/* webpackChunkName: "base-form-detail" */ './base-form-detail')
  },
  {
    name: 'CusDetail',
    path: '/cus-detail',
    component: () => import(/* webpackChunkName: "cus-detail" */ './cus-detail')
  },
  {
    name: 'BaseLabel',
    path: '/base-label',
    component: () => import(/* webpackChunkName: "base-label" */ './base-label')
  },
  {
    name: 'BaseCell',
    path: '/base-cell',
    component: () => import(/* webpackChunkName: "base-cell" */ './base-cell')
  }
]
