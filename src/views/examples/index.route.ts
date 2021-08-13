export default [
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
