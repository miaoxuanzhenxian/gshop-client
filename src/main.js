import Vue from 'vue'
import FastClick from 'fastclick' // 解决移动端浏览器上点击(click)响应延时0.3s问题，它消除了在移动浏览器上物理点击和触发点击事件之间的300毫秒延迟(为什么会有300ms延迟? 这样做的原因是，浏览器正在等待查看您是否正在实际执行双击)。但到2015年底，大多数移动浏览器——尤其是Chrome和Safari——不再有300毫秒的触摸延迟，因此fastclick在新浏览器上没有任何好处，并有可能给你的应用程序带来bug。仔细考虑你是否真的需要使用它。

import App from './App'
import './assets/styles/reset.css'

Vue.config.productionTip = false


// 绑定fastclick到document.body上，解决移动端浏览器上点击(click)响应延时0.3s问题，它消除了在移动浏览器上物理点击和触发点击事件之间的300毫秒延迟(为什么会有300ms延迟? 这样做的原因是，浏览器正在等待查看您是否正在实际执行双击)。但到2015年底，大多数移动浏览器——尤其是Chrome和Safari——不再有300毫秒的触摸延迟，因此fastclick在新浏览器上没有任何好处，并有可能给你的应用程序带来bug。仔细考虑你是否真的需要使用它。
FastClick.attach(document.body)

new Vue({
  render: h => h(App) // 函数返回组件的实例化标签<App />
}).$mount('#app')
