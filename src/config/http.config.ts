import { store } from '../store'
import { ApiConfig, HTTP_BODY_TYPES } from '@/core/http/http.dto'

export const API_CONFIG: ApiConfig = {
  apiPrefixUrl: process.env.NODE_ENV === 'production' ? '' : '',
  defaultBodyType: HTTP_BODY_TYPES.X_WWW_FORM_URLENCODED,
  successCode: true,
  successMessage: '请求成功',
  errroDefaultMessage: '其他错误',
  errorHandles: [
    (httpStatus: number) => {
      if (httpStatus === 401 || httpStatus === 400) {
        store.commit('tokenExpired')
      }
    }
  ],
  beforeApiSend(options) {
    const token = store.state.token
    const tokenType = store.state.token_type || 'Bearer'
    if (token) {
      if (options.headers) {
        options.headers.authorization = `${tokenType} ${token}`
      } else {
        options.headers = {
          authorization: `${tokenType} ${token}`
        }
      }
    }
    return options
  },
  hasNoErrorHandle(httpStatus) {
    if (httpStatus === 401) return true
    return false
  }
}

export interface HttpResponeType {
  success?: number | string
  message?: string
  data?: any
  timestamp?: number
}

export interface HttpErrorResponeType {
  success: number | string
  message: string
  data: any
  timestamp?: number
}
