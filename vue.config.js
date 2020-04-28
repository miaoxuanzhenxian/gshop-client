// const path = require('path')
const packjson = require('./package.json')
process.env.VUE_APP_VERSION = packjson.version
process.env.VUE_APP_PROJECTNAME = packjson.name


module.exports = {
  // configureWebpack: { // 内部写webpack原生配置
  //   resolve: {
  //     extensions: ['.js', '.vue', '.json'], // 自动解析确定的文件扩展名(自动添加的文件扩展名)，即可以省略的后缀名
  //     alias: { // 模块路径别名(简写方式)
  //       // 'vue$': 'vue/dist/vue.esm.js',  // $表示精准匹配,即import Test1 from 'vue';时是精确匹配，所以 vue/dist/vue.esm.js被解析和导入;但import Test2 from 'vue/file.js';时是非精确匹配，触发普通解析，vue/file.js被解析和导入。 vue/dist/vue.esm.js中的vue.esm.js是带templa模板编译器的
  //       // '@': path.resolve(__dirname, 'src'),
  //       'components': path.resolve(__dirname, 'src', 'components'),
  //       'pages': path.resolve(__dirname, 'src', 'pages'),
  //     }
  //   }
  // },
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
