import { Dialog, Button, Lazyload } from 'vant'
export default {
  install: app => {
    app.use(Dialog)
    app.use(Button)
    app.use(Lazyload, { lazyComponent: true })
  }
}
