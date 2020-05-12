/*
  管理shop功能模块相关状态数据的vuex模块
*/
import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
} from '../mutation-types'

import {
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '@/api'


const state = {
  goods: [], // 商家商品列表
  ratings: [], // 商家评价列表
  info: {} // 商家信息
}

const mutations = {
  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods
  },
  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings
  },
  [RECEIVE_INFO](state, { info }) {
    state.info = info
  }
}

const actions = {
  /*
    获取商家商品列表的异步action
  */
  async getShopGoods({ commit }, { id }) {
    const result = await reqShopGoods(id)
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, { goods })
    }
  },

  /*
    获取商家评价列表的异步action
  */
  async getShopRatings({ commit }, { id }) {
    const result = await reqShopRatings(id)
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, { ratings })
    }
  },

  /*
    获取商家信息的异步action
  */
  async getShopInfo({ commit }, { id }) {
    const result = await reqShopInfo(id)
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, { info })
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
