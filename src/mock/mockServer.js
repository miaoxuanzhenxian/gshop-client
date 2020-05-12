/*
  使用mockjs定义mock接口
*/
import Mock from 'mockjs'
import shop from './shop.json' // 加载json文件得到的是解析后的对应的js对象(json本质上是具有特定格式的字符串，但webpack在js中打包json文件时，会自动将json字符串解析为对应的js对象，方便我们编程)


const baseUrl = process.env.VUE_APP_BASE_URL
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
