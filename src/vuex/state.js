/*
  包含n个状态属性数据的对象
*/
export default {
  longitude: 116.36867, // 经度
  latitude: 40.10038, // 纬度
  address: {}, // 地址信息对象
  categorys: [], // 食品分类列表
  shops: [], // 商铺列表
  user: {}, // 当前登录用户信息对象
  token: localStorage.getItem('token_key') // 当前登录用户对应的token
}
