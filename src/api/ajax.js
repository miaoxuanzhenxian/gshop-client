/* 
  能发ajax请求的函数模块
  封装axios,函数的返回值是Promise
  1. 对post请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持): 请求拦截器
  2. 异步请求成功的结果数据不是response, 而是response.data: 响应拦截器的成功回调
  3. 统一处理请求异常、错误：响应拦截器的失败回调
  4. 配置请求超时的时间
  5. 如果是需要携带token的请求，从vuex的state中取出token
     1). token没有值，不发请求，直接进入失败的流程
     2). token有值，将token添加请求头中: Authorization = token
  6. 请求loading
*/
import axios from 'axios'
import qs from 'qs'
import { Toast } from 'mint-ui'

import store from '../store'
import router from '../router'


/*
  .env                # 在所有的环境中被载入
  .env.local          # 在所有的环境中被载入，但会被 git 忽略
  .env.[mode]         # 只在指定的模式中被载入
  .env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
*/
// 使用自定义配置创建一个axios实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。process.env.VUE_APP_BASE_URL为.env.xxx文件中的环境变量VUE_APP_BASE_URL的值。注：.env为一个特定模式准备的环境文件 (例如 .env.production) 将会比一般的环境文件 (例如 .env) 拥有更高的优先级,即若.env.production文件和.env文件中有相同的环境变量，则当加载指定模式加载.env.production文件时，.env文件也会被加载，但.env.production文件中的环境变量优先级更高，其环境变量的值会覆盖.env文件中的相同的环境变量的值
  timeout: 20000 // 4. 配置请求超时的时间
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  const { method, data } = config
  // 1、对post请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持): 请求拦截器
  if (method.toLowerCase() === 'post' && Object.prototype.toString.call(data) === '[object Object]') {
    config.data = qs.stringify(data)
  }

  // 5. 如果是需要携带token的请求，从vuex的state中取出token
  if (config.headers.needToken) {
    const token = store.state.user.token

    if (!token) { // 1). token没有值，不发请求，直接进入失败的流程
      const error = new Error('没有token, 不能发请求')
      error.status = 401 // 添加一个标识
      throw error
    } else { // 2). token有值，将token添加请求头中: Authorization = token
      config.headers.Authorization = token
    }
  }
  return config
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
  // 2. 异步请求成功的结果数据不是response, 而是response.data: 响应拦截器的成功回调
  return response.data
}, error => { // 3. 统一处理请求异常、错误：响应拦截器的失败回调
  const { response, status, message } = error

  if (!response) { // 发请求前失败，发请求前的异常、错误
    if (status === 401) { // 发请求前没有需要的token就失败, 401代表没有权限或权限过期，500代表服务器运行出异常了
      if (router.currentRoute.path !== '/login') { // 如果当前没在登陆界面
        // 提示
        Toast(message)
        // 跳转到登录界面
        router.replace('/login')
      }
    }
  } else { // 发请求后失败，发请求后的异常、错误
    const status = response.status
    if (status === 401) {  // 发了请求，token过期了
      if (router.currentRoute.path !== '/login') { // 如果当前没在登陆界面
        // 提示
        Toast(response.data.message)
        // 退出登录,清除vuex中的user、token及localStorage中的token
        store.dispatch('user/logout')
        // 跳转到登录界面
        router.replace('/login')
      }
    } else if (status === 404) { // 请求的资源不存在
      Toast('请求的资源不存在')
    } else { // 其它失败、异常、错误
      Toast('请求错误: ' + message)
    }
  }

  // return Promise.reject(error)
  // 返回一个pending状态(或者叫初始状态或者叫中断状态或者叫空的)的Promise, 中断Promise链
  return new Promise(() => { }) 
})

export default instance
