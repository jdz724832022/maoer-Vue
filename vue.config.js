module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'https://www.missevan.com', // 请求的地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/': ''
        },
        secure: false,
        ws: true
      }
    },
    disableHostCheck: true
  }
}
