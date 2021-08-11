import { Dialog, Button } from 'vant'
export default {
  install: app => {
    app.use(Dialog).use(Button)
  }
}
