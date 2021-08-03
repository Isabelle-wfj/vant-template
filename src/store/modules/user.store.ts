import { Dialog } from 'vant'
import { ActionContext } from 'vuex'
interface State {
  [key: string]: any
}
const localStorageEnable =
  window.Storage &&
  window.localStorage &&
  window.localStorage instanceof Storage
const localUser = localStorageEnable && localStorage.getItem('user')
const user = localStorageEnable && localUser ? JSON.parse(localUser) : {}
const User = {
  state: {
    user,
    isTokenExpiredHandling: false // 是否正在处理401
  },
  mutations: {
    setUser: (state: any, user: any) => {
      localStorageEnable && localStorage.setItem('user', JSON.stringify(user))
      state.user = user
    },
    setUserInfo: (state: any, userInfo: any) => {
      const user = Object.assign(state.user, userInfo)
      localStorageEnable && localStorage.setItem('user', JSON.stringify(user))
      state.user = user
    },
    clearUser: (state: any) => {
      if (localStorageEnable) {
        localStorage.removeItem('user')
        localStorage.removeItem('permission')
      }
      state.user = {}
      state.permissions = []
    },
    tokenExpired: (state: any) => {
      if (state.isTokenExpiredHandling) return
      state.isTokenExpiredHandling = true
      Dialog.alert({
        title: '登录过期',
        message: '登录已过期，请重新登录。',
        confirmButtonText: '重新登录'
      }).then(() => {
        if (localStorageEnable) {
          localStorage.removeItem('user')
        }
        state.user = {}
        state.permissions = []
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
