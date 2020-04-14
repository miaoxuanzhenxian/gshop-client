<template>
  <section class="order">
    <header class="header">
      <span class="header-title">
        <span class="header-title-text">订单列表</span>
      </span>
    </header>
    <section class="order-no-login">
      <img src="./images/person.png" alt="">
      <h3>登录后查看外卖订单</h3>
      <button>立即登录</button>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'Order'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .order
    width 100%
    margin-bottom 50px
    .header
      position fixed
      z-index 100
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
    .order-no-login
      padding-top 140px
      width 60%
      margin 0 auto
      text-align center
      >img
        display block // 解决子元素是img标签时会将父元素撑大的bug
        width 100%
      >h3
        padding 10px 0
        font-size 17px
        color #6a6a6a
      >button
        background #02a774
        font-size 14px
        color #fff
        padding 10px 20px
        border 0
        border-radius 5px
        outline none
</style>
