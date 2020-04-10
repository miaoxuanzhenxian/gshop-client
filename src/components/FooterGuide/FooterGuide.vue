<template>
  <footer class="footer-guide border-1px">
    <router-link to="/msite" exact tag="span" class="guide-item" active-class="on">
      <span>
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </router-link>
    <router-link to="/search" exact tag="span" class="guide-item" active-class="on">
      <span>
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </router-link>
    <router-link to="/order" exact tag="span" class="guide-item" active-class="on">
      <span>
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </router-link>
    <router-link to="/profile" exact tag="span" class="guide-item" active-class="on">
      <span>
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </router-link>
  </footer>
</template>

<script>
  export default {
    name: 'FooterGuide'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer-guide
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    &::before
      height 1px
      border-top 1px solid #e4e4e4
    .guide-item
      flex 1
      text-align center
      display flex
      flex-direction column
      justify-content center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
