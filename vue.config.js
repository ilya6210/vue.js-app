module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  pwa: {
    name: 'Vue.js App - @Ilya6210',
    msTileColor: '#58D67B',
    manifestOptions: {
      background_color: '#58D67B'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/variables.scss";`
      }
    }
  }
}