import { createApp } from 'vue'
import { Dialog } from 'vant'
import App from './App.vue'
const app = createApp(App)
app.use(Dialog)
app.mount('#app')
