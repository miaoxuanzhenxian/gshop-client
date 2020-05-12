/*
  vuex最核心的管理对象store
*/
import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import msite from './modules/msite'
import user from './modules/user'
import shop from './modules/shop'

// 声明使用vue插件
Vue.use(Vuex)


export default new Store({
  mutations, // 总的mutations, 它内部看到的就是总的state
  actions, // 总的actions, 它内部看到的就是总的state
  getters, // 总的getters, 它内部看到的就是总的state
  modules: { // vuex多模块编程
    msite,
    user,
    shop
  }
})

/*
  总state的结构
  {
    msite: {},
    user: {},
    shop: {}
  }

  state.user.user._id
  state.shop.info
*/
