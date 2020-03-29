/*
  配置应用中所有路由
*/
import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'


export default [
  {
    path: '/msite',
    component: MSite
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/', // 项目根路径
    redirect: '/msite' // 项目根路径时，重定向到/msite，即默认显示/msite路由，即默认显示MSite
  }
]