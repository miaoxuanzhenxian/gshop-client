<template>
  <div id="app">
    <router-view />
    <FooterGuide />
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name: 'App',
    components: {
      FooterGuide
    }
  }
  // console.log(process.env)
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
</style>
