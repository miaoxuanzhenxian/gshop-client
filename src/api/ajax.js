/* 
  能发ajax请求的函数模块
  封装axios,函数的返回值是Promise
*/
import axios from 'axios'
import qs from 'qs'


axios.create({
  baseURL: process.env.VUE_APP_BASE_HOST
})

// 添加请求拦截器
axios.interceptors.request.use(config => {
  const { method, data } = config
  if (method.toLowerCase() === 'post' && Object.prototype.toString.call(data) === '[object Object]') {
    config.data = qs.stringify(data)
  }
  return config
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, error => {

  return new Promise(() => { })
})


export default axios