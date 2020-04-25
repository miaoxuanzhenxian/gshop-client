/* 
  路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes' // 配置应用中所有路由

// 声明使用vue插件
Vue.use(VueRouter)


export default new VueRouter({ // 配置对象
  mode: 'history', // 没有#,使用没有#的只有/的history模式
  routes // 配置应用中所有路由
})
