<template>
  <section class="msite">
    <!-- 首页头部 -->
    <header class="msite-header">
      <span class="header-search">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header-title">
        <span class="header-title-text ellipsis">
          昌平区北七家宏福科技园(337省道北)
        </span>
      </span>
      <span class="header-login">
        <span>登录|注册</span>
      </span>
    </header>
    <!-- 首页导航 -->
    <nav class="msite-nav">

    </nav>
    <!-- 首页附近商家 -->
    <div class="msite-shop-list">

    </div>
  </section>
</template>

<script>
  export default {
    name: 'MSite'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .msite
    width 100%
    .msite-header
      position fixed
      z-index 100
      left 0
      right 0
      top 0
      background-color #02a774
      width 100%
      height 45px
      .header-search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header-title
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)
        width 50%
        text-align center
        .header-title-text
          font-size 20px
          color #fff
          display block
      .header-login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
</style>
