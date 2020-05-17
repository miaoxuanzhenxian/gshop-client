/*
  管理shop功能模块相关状态数据的vuex模块
*/
import Vue from 'vue'
import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
} from '../mutation-types'

import {
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '@/api'


const state = {
  goods: [], // 商家商品列表
  ratings: [], // 商家评价列表
  info: {}, // 商家信息
  cartFoods: [] // 购物车food数组
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
  },

  [ADD_FOOD_COUNT](state, { food }) {
    if (food.count) {
      food.count ++
    } else {
      // 给food添加一个新的属性，属性名是count，值是1
      // food.count = 1 // 以这种点.的方式来新添加的属性没有数据绑定(没有数据劫持、没有数据监视)，是不会在更新时去更新界面的
      Vue.set(food, 'count', 1) // 为响应式对象添加一个属性，确保新属性也是响应式的，并且能够触发视图更新
      // 添加到购物车
      state.cartFoods.push(food)
    }
  },
  [REDUCE_FOOD_COUNT](state, { food }) {
    if (food.count > 0) {
      food.count--
      // 一旦数量减为0, 从cartFoods中移除此food
      if (food.count === 0) {
        delete food.count // 解决当food.count减为0后，再次变为1时，不能添加到cartFoods中,即不能添加到购物车中的bug
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
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
  },

  /*
    更新food的count数量
  */
  updateFoodCount({ commit }, { isAdd, food }) {
    if (isAdd) {
      commit(ADD_FOOD_COUNT, { food })
    } else {
      commit(REDUCE_FOOD_COUNT, { food })
    }
  }
}

const getters = {
  // /* 计算属性的调用时机(即什么时候计算属性会被调用执行): 
  //     1. 初始显示
  //     2. 依赖数据发生改变
  //   这样每次点击+号或-号时，都会改变依赖的goods数据，都会导致重新计算，都会重新调用执行此cartFoods计算属性，这样会导致每次有改变都需要遍历所有food(两次遍历循环)，效率偏低
  // */
  // cartFoods(state) {
  //   const { goods } = state
  //   const arr = []

  //   goods.forEach(good => {
  //     good.foods.forEach(food => {
  //       if (food.count > 0) {
  //         arr.push(food)
  //       }
  //     })
  //   })

  //   return arr
  // }
}

export default {
  namespaced: true, // 命名空间
  state,
  mutations,
  actions,
  getters
}
