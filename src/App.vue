<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
    <FooterGuide />
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name: 'App',
    components: {
      FooterGuide
    },
    provide () {
      return {
        reload: this.reload
      }
    },
    data () {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload () {
        console.log('reload')
        this.isRouterAlive = false
        this.$nextTick(function() {
          this.isRouterAlive = true
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
</style>
