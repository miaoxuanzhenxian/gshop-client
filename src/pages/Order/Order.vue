<template>
  <section class="order">
    <Header title="订单列表" />
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
