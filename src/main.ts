import { createApp } from 'vue'
import axios from 'axios'
import vantNext from '@/core/utils/plugins/vant-next'
import '@/core/styles/index.scss'
import globalVar from '@/core/utils/vue/global-var'
import i18n from '@/core/utils/i18n'
import App from './App.vue'
import router from '@/router'
import { store } from '@/store'
import { BaseCell, BaseLabel } from '@/components/base'
axios.defaults.baseURL = (window as any).GLOBAL_CONFIG?.gatewayUrl

const app = createApp(App)
app.use(vantNext).use(i18n).use(globalVar).use(store).use(router)

const globalComponents = [BaseCell, BaseLabel]
globalComponents.forEach((component: any) => {
  app.component(component.name, component)
})

app.config.globalProperties['$t'] = key => {
  if (store.state.lang == 'zh_CN') return key
  i18n.global.t.bind(i18n)
}
// 国际化初始化
i18n.$setLocale(
  (window as any).$runtime?.environment?.config?.language || 'zh_CN'
)
app.mount('#app')
