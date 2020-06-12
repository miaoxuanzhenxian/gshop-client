/*
  自定义过滤器模块
 */
import Vue from 'vue'
import format from 'date-fns/format' // 也能实现过滤日期格式化的功能，并且打包后体积较小，比较好
// import moment from 'moment' // 打包后体积太大，不太好


// 日期格式化过滤器: date-format
Vue.filter('date-format', (value, formatStr = 'yyyy-MM-dd HH:mm:ss') => {
  return format(value, formatStr)
  // return moment(value).format(formatStr)
})
