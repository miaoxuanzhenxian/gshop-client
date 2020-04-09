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
    <nav class="msite-nav border-1px">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/3.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/4.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/5.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/6.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/7.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/8.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
          <!-- <div class="swiper-slide">
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/9.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/10.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/11.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/12.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/13.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/14.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link-to-food">
              <div class="food-container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div> -->
        </div>
        <!-- 添加分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!-- 首页附近商家 -->
    <div class="msite-shop-list border-1px">
      <div class="shop-header">
        <span>
          <i class="iconfont icon-xuanxiang"></i>
        </span>
        <span class="shop-header-title">附近商家</span>
      </div>
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
    background-color #f5f5f5
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
    .msite-nav
      margin-top 45px
      height 200px
      background-color #fff
      &::before
        border-bottom 1px solid red
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            align-items flex-start
            flex-wrap wrap
            .link-to-food
              width 25%
              .food-container
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0 // 解决子元素是img标签时会将父元素撑大的bug
                img
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >>>.swiper-pagination-bullet-active
            background #02a774
    .msite-shop-list
      margin-top 10px
      background-color #fff
      &::before
        border-top 1px solid #e4e4e4
      .shop-header
        padding 10px 10px 0
</style>
