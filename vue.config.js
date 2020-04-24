const packjson = require('./package.json')
process.env.VUE_APP_VERSION = packjson.version
process.env.VUE_APP_PROJECTNAME = packjson.name

module.exports = {
  // 配置开发服务器中的代理
  // devServer: {
  //   // proxy: 'http://localhost:4000' // 简单的代理跨域
  //   proxy: { // 更灵活的、更多的代理跨域控制行为
  //     // 请求地址以/api开头
  //     '/api': {
  //       target: 'http://localhost:4000', // 转发的目标地址
  //       changeOrigin: true, // 支持跨域
  //       pathRewrite: { // 重写路径：让代理服务器在转发请求时，对路径进行特定修改
  //         '^/api': '' // rewrite path，去掉路径中的/api
  //       }
  //     },
  //     // 请求地址以/baidu开头
  //     '/baidu': {
  //       target: 'http://www.baidu.com',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/baidu': ''
  //       }
  //     }
  //   }
  // },
  productionSourceMap: false, // 生产环境打包上线时(前)关闭sourcemap(开发中的源文件)
  outputDir: process.env.outputDir // 输出打包后文件的地址，即文件夹名,process.env.outputDir没值时或outputDir: process.env.outputDir这一项没设置时，则默认输出打包后文件的地址，即文件夹名为项目根目录下的dist文件夹
}