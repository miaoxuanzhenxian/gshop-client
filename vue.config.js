const packjson = require('./package.json')
process.env.VUE_APP_VERSION = packjson.version
process.env.VUE_APP_PROJECTNAME = packjson.name

module.exports = {
  productionSourceMap: false, // 生产环境打包上线时(前)关闭sourcemap(开发中的源文件)
  outputDir: process.env.outputDir // 输出打包后文件的地址，即文件夹名,process.env.outputDir没值时或outputDir: process.env.outputDir这一项没设置时，则默认输出打包后文件的地址，即文件夹名为项目根目录下的dist文件夹
}