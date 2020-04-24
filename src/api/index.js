/*
  包含多个接口请求函数的模块
  每个函数的返回值都是Promise对象
*/
import ajax from './ajax'


// const BASE = '/api'
// const BASE2 = '/baidu'

// 1、根据经纬度获取位置详情
// export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`) // 练习使用代理解决ajax跨域问题，另一个后台服务器(http://localhost:4000)
export const reqAddress = (longitude, latitude) => ajax(`/position/${latitude},${longitude}`)

// 2、获取食品分类列表
export const reqCategorys = () => ajax('/index_category')

// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax('/shops', {
  params: {
    latitude,
    longitude
  }
})

// export const reqBaiDuXxx = () => ajax(BASE2 + '/xxx') // 练习使用代理解决ajax跨域问题，另一个后台服务器(http://www.baidu.com)

// // 简单的测试一下接口请求函数
// reqAddress('116.36867', '40.10038').then(result => {
//   console.log('result', result)
// })
