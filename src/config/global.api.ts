import { Send, HTTP_METHODS } from '@/core/http'
class Api {
  i18n(params?: any) {
    return Send({
      url: '/system/api/i18n',
      params,
      method: HTTP_METHODS.GET,
      errorText: '获取数据失败'
    })
  }
}

export const PpsGlobalApi = new Api()
