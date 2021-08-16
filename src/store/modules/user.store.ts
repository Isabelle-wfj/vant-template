import { Dialog } from 'vant'
import { ActionContext } from 'vuex'
import in18 from '@/core/utils/i18n'
import {
  getStorageItem,
  setStorageItem,
  removeStorageItem
} from '@/core/utils/tools/storage'
interface State {
  [key: string]: any
}
const User = {
  state: {
    lang: getStorageItem('lang') || 'zh_CN',
    color: getStorageItem('color') || '#141414',
    user: getStorageItem('user') || {},
    isTokenExpiredHandling: false // 是否正在处理401
  },
  mutations: {
    setSkin: (state: any, color: any) => {
      setStorageItem('color', color)
      state.color = color
    },
    setI18n: (state: any, lang: any) => {
      in18.$setLocale(lang)
      state.lang = lang
    },
    setUser: (state: any, user: any) => {
      setStorageItem('user', user)
      state.user = user
    },
    setUserInfo: (state: any, userInfo: any) => {
      const user = Object.assign(state.user, userInfo)
      setStorageItem('user', user)
      state.user = user
    },
    clearUser: (state: any) => {
      removeStorageItem('user')
      state.user = {}
    },
    tokenExpired: (state: any) => {
      if (state.isTokenExpiredHandling) return
      state.isTokenExpiredHandling = true
      Dialog.alert({
        title: '登录过期',
        message: '登录已过期，请重新登录。',
        confirmButtonText: '重新登录'
      }).then(() => {
        removeStorageItem('user')
        state.user = {}
        state.isTokenExpiredHandling = false
      })
    }
  },
  actions: {
    async login(context: ActionContext<State, any>, data: any) {
      console.log(data)
    }
  }
}

export default User
