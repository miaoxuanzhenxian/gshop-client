/*
  vuex最核心的管理对象store
*/
import vue from 'vue'
import Vuex, { Store } from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 声明使用vue插件
vue.use(Vuex)


export default new Store({
  state,
  mutations,
  actions,
  getters
})
