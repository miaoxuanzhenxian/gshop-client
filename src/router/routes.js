/*
  配置应用中所有路由
*/
import lazyLoadView from '../utils/lazyLoadView'
import NotFound from '../pages/NotFound/NotFound'
import Goods from '../pages/Shop/Goods/Goods'


// 路由的懒加载，解决首屏加载过慢的问题
const MSite = () => lazyLoadView(import('../pages/MSite/MSite'))
const Search = () => lazyLoadView(import('../pages/Search/Search'))
const Order = () => lazyLoadView(import('../pages/Order/Order'))
const Profile = () => lazyLoadView(import('../pages/Profile/Profile'))
const Login = () => lazyLoadView(import('../pages/Login/Login'))
const Shop = () => lazyLoadView(import('../pages/Shop/Shop'))
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
    }
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
    path: '/', // 项目根路径
    redirect: '/msite' // 项目根路径时，重定向到/msite，即默认显示/msite路由，即默认显示MSite
  },
  {
    path: '/*',
    component: NotFound
  }
]
