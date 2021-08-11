export default {
  install: app => {
    app.config.globalProperties['$src'] = process.env.VUE_APP_OSS_SRC
  }
}
