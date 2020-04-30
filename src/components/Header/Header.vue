<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header-title">
      <span class="header-title-text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    // 声明接收属性
    props: {
      title: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    position fixed
    z-index 1000
    left 0
    right 0
    top 0
    background #02a774
    width 100%
    height 45px
    color #fff
    .header-search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
    .header-title
      position absolute
      left 50%
      top 50%
      transform translate(-50%, -50%)
      width 50%
      text-align center
      .header-title-text
        font-size 20px
        display block
    .header-login
      font-size 14px
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
</style>
