import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  render: h => h(App) // 函数返回组件的实例化标签<App />
}).$mount('#app')
