/*
  配置应用中所有路由
*/
import lazyLoadView from '../utils/lazyLoadView'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'
import A from '../pages/test/A/A'
import B from '../pages/test/B/B'
import B1 from '../pages/test/B/B1/B1'
import B2 from '../pages/test/B/B2/B2'

/* 
路由组件懒加载:
    1). 在打包时路由组件会被单独打包(代码分割: code split)
    2). 默认不请求加载路由组件打包文件, 当首次请求需要的路由组件时才请求加载，再次请求相同的路由组件时则不需要了，就会直接用首次已经加载好了的
1. import动态引入: import(模块路径)
    结果: 使用import()来引入模块,会对引入模块进行拆分(单独)打包, 即被动态引入的模块会被单独打包(代码分割: code split)   webpack做的
2. 路由组件配置的是一个函数: 返回包含对应的动态加载的路由组件模块的promise对象的函数
    函数开始时不执行(开始不请求加载单独打包的路由组件模块代码), 首次请求对应的路径时才会执行, 即当首次请求对应路径需要显示对应的组件界面时, 函数才会执行, 去加载对应的路由组件打包文件，再次请求相同路径的路由组件时则不需要了，就会直接用首次已经加载好了的
作用: 减小首屏需要加载的js文件大小 ==> 从而使得显示更快，提高了效率，解决首屏加载过慢的问题

实现过程:
1).对引入模块进行拆分(单独)打包:  使用import()来引入模块
2).路由组件配置的是一个函数: 返回包含对应的动态加载的路由组件模块的promise对象, 函数初始不会执行, 请求对应的路径时才执行
*/
// 路由的懒加载，解决首屏加载过慢的问题
const MSite = () => lazyLoadView(import('../pages/MSite/MSite'))
const Search = () => import('../pages/Search/Search')
// const Search = () => lazyLoadView(import('../pages/Search/Search')) // 此种方式的路由组件内的守卫会失效

const Order = () => lazyLoadView(import('../pages/Order/Order'))
const Profile = () => lazyLoadView(import('../pages/Profile/Profile'))
const Shop = () => import('../pages/Shop/Shop')
// const Shop = () => lazyLoadView(import('../pages/Shop/Shop')) // 此种方式的路由组件内的守卫会失效
const Goods = () => lazyLoadView(import('../pages/Shop/Goods/Goods'))
const Ratings = () => lazyLoadView(import('../pages/Shop/Ratings/Ratings'))
const Info = () => lazyLoadView(import('../pages/Shop/Info/Info'))

export default [
  {
    path: '/msite',
    component: MSite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    },
    // beforeEnter: (to, from, next) => { // 路由独享的守卫, 有且仅有beforeEnter这一个路由独享的守卫(它是进入路由之前的路由独享的守卫)，没有离开路由之前的路由独享的守卫
    //   console.log('search-enter')
    //   next()
    // }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop/:id',
    component: Shop,
    props: true, // 如果 props 被设置为 true，则route.params 将会被设置为组件属性,即会将所有params参数转换Shop组件的标签属性，从而在Shop组件中用props声明接收一下这些标签属性，就可以使用这些标签属性，也可以传递给子路由组件
    children: [
      {
        // path: '/shop/:id/goods',
        path: 'goods',
        component: Goods
      },
      {
        path: 'ratings',
        component: Ratings,
      },
      {
        path: 'info',
        component: Info
      },
      {
        // path: '/shop/:id',
        // redirect: '/shop/:id/goods'
        path: '',
        redirect: 'goods'
      }
    ]
  },
  {
    path: '/a',
    component: A
  },
  {
    path: '/b',
    component: B,
    children: [
      {
        path: 'b1',
        component: B1
      },
      {
        path: 'b2',
        component: B2
      }
    ]
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
