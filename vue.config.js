module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:6789 ',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api' // 若请求的路径在目标url下但不在/api 下，则将其转换成空
        }
      }
    }
  }
}
