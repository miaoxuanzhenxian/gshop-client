/*
  管理msite功能模块相关状态数据的vuex模块
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from '../mutation-types'

import {
  reqAddress,
  reqCategorys,
  reqShops
} from '@/api'


const state = {
  longitude: 116.36867, // 经度
  latitude: 40.10038, // 纬度
  address: {}, // 地址信息对象
  categorys: [], // 食品分类列表
  shops: [] // 商铺列表
}

const mutations = {
  [RECEIVE_ADDRESS](state, address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, shops) {
    state.shops = shops
  }
}

const actions = {
  /*
    获取当前地址信息对象的异步action
  */
  async getAddress({ commit, state }) {
    // 1. 调用接口请求函数发请求
    const { longitude, latitude } = state
    const result = await reqAddress(longitude, latitude)
    // 2.有了结果后，提交mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },

  // /*
  //   获取食品分类列表的异步action
  //   方式2: callback + nextTick() 解决创建swiper对象之后不能正常轮播的问题
  // */
  // async getCategorys({ commit }, callback) {
  //   // 1. 调用接口请求函数发请求
  //   const result = await reqCategorys()
  //   // 2.有了结果后，提交mutation
  //   if (result.code === 0) {
  //     const categorys = result.data
  //     commit(RECEIVE_CATEGORYS, categorys) // 内部同步调用mutation更新状态数据

  //     // 在commit之后执行callback, 即在更新状态数据后执行callback回调函数
  //     typeof callback === 'function' && callback()
  //   }
  // },

  /*
    获取食品分类列表的异步action
    方式2: callback + nextTick() 解决创建swiper对象之后不能正常轮播的问题
  */
  async getCategorys({ commit }) {
    // 1. 调用接口请求函数发请求
    const result = await reqCategorys()
    // 2.有了结果后，提交mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
    }
  },

  /*
    获取商铺列表的异步action
  */
  async getShops({ commit, state }) {
    // 1. 调用接口请求函数发请求
    const { longitude, latitude } = state
    const result = await reqShops(longitude, latitude)
    // 2.有了结果后，提交mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  }
}

const getters = {}

export default {
  namespaced: true, // 命名空间
  state,
  mutations,
  actions,
  getters
}
