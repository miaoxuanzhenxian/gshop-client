/* 
  能发ajax请求的函数模块
  封装axios,函数的返回值是Promise
  1. 对请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持)
  2. 异步请求成功的数据不是response, 而是response.data
  3. 统一处理请求异常
  4. 配置请求超时的时间
  5. 通过请求头携带token数据
  6. 请求loading
*/
import axios from 'axios'
import qs from 'qs'


/*
  .env                # 在所有的环境中被载入
  .env.local          # 在所有的环境中被载入，但会被 git 忽略
  .env.[mode]         # 只在指定的模式中被载入
  .env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
*/
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。process.env.VUE_APP_BASE_URL为.env.xxx文件中的环境变量VUE_APP_BASE_URL的值。注：.env为一个特定模式准备的环境文件 (例如 .env.production) 将会比一般的环境文件 (例如 .env) 拥有更高的优先级,即若.env.production文件和.env文件中有相同的环境变量，则当加载指定模式加载.env.production文件时，.env文件也会被加载，但.env.production文件中的环境变量优先级更高，其环境变量的值会覆盖.env文件中的相同的环境变量的值
  timeout: 20000 // 配置请求超时的时间
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  const { method, data } = config
  if (method.toLowerCase() === 'post' && Object.prototype.toString.call(data) === '[object Object]') {
    config.data = qs.stringify(data)
  }
  return config
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
  return response.data
}, error => {

  return new Promise(() => { })
})


export default instance