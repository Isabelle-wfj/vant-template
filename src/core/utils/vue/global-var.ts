export default {
  install: app => {
    app.config.globalProperties['$src'] = (window as any).GLOBAL_CONFIG.cdnUrl
  }
}
