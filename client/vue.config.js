const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:4000';

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false, //추가설정함. 컴포넌트이름관련..
  devServer : {
    proxy : {
      '^/api' : {
        target,
        changeOrigin : true,
        ws : false,
        pathRewrite : { '^/api' :'/' }
      }
    }
  }
})
