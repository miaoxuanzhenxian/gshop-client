<template>
  <section class="msite">
    <!-- 首页头部 -->
    <Header title="xxx">
      <span class="header-search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header-login" slot="right">
        <span>登录|注册</span>
      </span>
    </Header>
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
    <Shops />
  </section>
</template>

<script>
  import Shops from './Shops/Shops'
  export default {
    name: 'MSite',
    components: {
      Shops
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .msite
    width 100%
    margin-bottom 50px
    .msite-nav
      margin-top 45px
      height 200px
      background #fff
      &::before
        height 1px
        top 100%
        border-bottom 1px solid #e4e4e4
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
</style>
