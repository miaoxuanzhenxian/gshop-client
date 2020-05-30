/* 
  路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import routes from './routes' // 配置应用中所有路由

// 声明使用vue插件
Vue.use(VueRouter)

const router = new VueRouter({ // 配置对象
  mode: 'history', // 没有#,使用没有#的只有/的history模式
  routes // 配置应用中所有路由
})

// 所有需要进行用户登录检查的路由路径path的数组
const paths = ['/a', '/b']

// 定义全局前置守卫
router.beforeEach((to, from, next) => {
  const path = to.path
  // 如果目标path是需要检查的路由路径, 判断用户如果不存在，跳转到登陆界面 
  if (paths.indexOf(path) !== -1 && !store.state.user.user._id) {
    return next('/login')
  }

  // 放行
  next()
})

export default router
