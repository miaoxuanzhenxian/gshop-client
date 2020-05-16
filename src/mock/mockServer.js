/*
  使用mockjs定义mock接口
*/
import Mock from 'mockjs'
import shop from './shop.json' // 加载json文件得到的是解析后的对应的js对象(json本质上是具有特定格式的字符串，但webpack在js中打包json文件时，会自动将json字符串解析为对应的js对象，方便我们编程)


const baseUrl = process.env.VUE_APP_BASE_URL

// 指定被拦截的 Ajax 请求的响应时间，单位是毫秒。值可以是正整数，例如400，表示400毫秒后才会返回响应内容；也可以是横杠 '-' 风格的字符串，例如 '200-600'，表示响应时间介于 200 和 600 毫秒之间。默认值是'10-100'
Mock.setup({ 
  timeout: 400 // 表示400毫秒后才会返回响应内容；
})

// goods接口
// Mock.mock(baseUrl + '/shop_goods', { code: 0, data: shop.goods })
// Mock.mock(/\/shop_goods\?id=/, { code: 0, data: shop.goods })
Mock.mock(RegExp(baseUrl + '/shop_goods\\?id='), { code: 0, data: shop.goods })


// ratings接口
// Mock.mock(baseUrl + '/shop_ratings', { code: 0, data: shop.ratings })
Mock.mock(RegExp(baseUrl + '/shop_ratings\\?id='), { code: 0, data: shop.ratings })
// shop_info接口
// Mock.mock(baseUrl + '/shop_info', { code: 0, data: shop.info })
Mock.mock(RegExp(baseUrl + '/shop_info\\?id='), { code: 0, data: shop.info })

console.log('mockServer启动了...')
