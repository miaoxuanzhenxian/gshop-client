/*
  配置应用中所有路由
*/
import lazyLoadView from '../utils/lazyLoadView'


// 路由的懒加载，解决首屏加载过慢的问题
const MSite = () => lazyLoadView(import('../pages/MSite/MSite'))
const Search = () => lazyLoadView(import('../pages/Search/Search'))
const Order = () => lazyLoadView(import('../pages/Order/Order'))
const Profile = () => lazyLoadView(import('../pages/Profile/Profile'))
const Login = () => lazyLoadView(import('../pages/Login/Login'))
const NotFound = () => lazyLoadView(import('../pages/NotFound/NotFound'))

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
    path: '/login',
    component: Login
  },
  {
    path: '/', // 项目根路径
    redirect: '/msite' // 项目根路径时，重定向到/msite，即默认显示/msite路由，即默认显示MSite
  },
  {
    path: '/*',
    component: NotFound
  }
]
