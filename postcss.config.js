module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {}, // 用来处理元素容器宽高比。
    "postcss-write-svg": { // 用来处理移动端1px的解决方案。
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,     // (Number) The width of the viewport. 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334,   // (Number) The height of the viewport. 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3,       // (Number) The decimal numbers to allow the REM units to grow to. 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw',     // (String) Expected units. 指定需要转换成的视窗单位，建议使用vw
      // selectorBlackList: ['.ignore', '.hairlines'],  // (Array) The selectors to ignore and leave as px. 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1,       // (Number) Set the minimum pixel value to replace. 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false,      // (Boolean) Allow px to be converted in media queries.允许在媒体查询中转换`px`
      exclude: /(\/|\\)(node_modules)(\/|\\)/  // 将node_modules目录排除掉，即不会受影响,node_modules目录中的不会转为vw
    },
    "postcss-viewport-units": { // postcss-viewport-units配合viewport-units-buggyfill库做vw兼容方案
      filterRule: rule => rule.selector.indexOf('::after') === -1 && rule.selector.indexOf('::before') === -1 && rule.selector.indexOf(':after') === -1 && rule.selector.indexOf(':before') === -1 // 过滤掉伪元素选择器::before、::after
    },
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,    // 和cssnext同样具有autoprefixer，保留一个
      "postcss-zindex": false // 只要启用了这个插件，z-index的值就会重置为1。这是一个天坑，千万记得将postcss-zindex设置为false。
    }
  }
}