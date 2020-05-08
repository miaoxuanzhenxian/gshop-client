/*
  包含n个间接更新状态数据的方法的对象
*/
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER
} from './mutation-types'


export default {
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
  },

  /*
    保存user的同步action
  */
  saveUser({ commit }, user) {
    commit(RECEIVE_USER, { user })
  },

  /*
    退出登录
  */
  logout({ commit }) {
    commit(RESET_USER)
  }
}
