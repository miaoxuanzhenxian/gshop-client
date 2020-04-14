<template>
  <div class="loading-error">
    加载错误，请点击<span class="flush" @click="retry">刷新重试</span>
  </div>
</template>

<script>
  export default {
    name: 'LoadingError',
    methods: {
      retry () {
        location.reload()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loading-error
    white-space nowrap
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    .flush
      color #00f
</style>
