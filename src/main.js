import Vue from 'vue'
import { Button } from 'mint-ui'
import FastClick from 'fastclick' // 解决移动端浏览器上点击(click)响应延时0.3s问题，它消除了在移动浏览器上物理点击和触发点击事件之间的300毫秒延迟(为什么会有300ms延迟? 这样做的原因是，浏览器正在等待查看您是否正在实际执行双击)。但到2015年底，大多数移动浏览器——尤其是Chrome和Safari——不再有300毫秒的触摸延迟，因此fastclick在新浏览器上没有任何好处，并有可能给你的应用程序带来bug。仔细考虑你是否真的需要使用它。

import App from './App'
import router from './router'
import store from './vuex/store'
import Header from './components/Header/Header'
import Star from './components/Star/Star'
import './assets/styles/reset.css'
import './assets/js/validate.js'

Vue.config.productionTip = false // 设置为false以阻止vue在启动时生成生产提示。


// 注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component(Button.name, Button)

/* 解决引入使用fastclick插件库后在苹果移动端浏览器上输入框(包括input和textarea)点击无响应问题的bug，即会产生输入框(包括input和textarea)点击无法获取焦点问题，只有双击或者长按的时候才能使input或textarea输入框获取到焦点的bug */
FastClick.prototype.focus = function(targetElement) {
  let length
  const isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // 去获取当前系统是否为ios,继续执行判断
  // 兼容处理:在iOS7中，有一些元素（如date、datetime、month等）在setSelectionRange会出现TypeError
  // 这是因为这些元素并没有selectionStart和selectionEnd的整型数字属性，所以一旦引用就会报错，因此排除这些属性才使用setSelectionRange方法
  if ( isIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length
    targetElement.focus() // 修复bug ios 11.3不弹出键盘，这里加上聚焦代码，让其强制聚焦弹出键盘
    targetElement.setSelectionRange(length, length)
  } else {
    targetElement.focus()
  } 
}
// 绑定fastclick到document.body上，解决移动端浏览器上点击(click)响应延时0.3s问题，它消除了在移动浏览器上物理点击和触发点击事件之间的300毫秒延迟(为什么会有300ms延迟? 这样做的原因是，浏览器正在等待查看您是否正在实际执行双击)。但到2015年底，大多数移动浏览器——尤其是Chrome和Safari——不再有300毫秒的触摸延迟，因此fastclick在新浏览器上没有任何好处，并有可能给你的应用程序带来bug。仔细考虑你是否真的需要使用它。
FastClick.attach(document.body)

new Vue({
  render: h => h(App), // 函数返回组件的实例化标签<App />
  router, // 配置路由器
  store // 配置vuex的store
}).$mount('#app')
