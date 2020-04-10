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
      <div class="shop-container">
        <ul class="shop-list">
          <li class="shop-li border-1px">
            <a class="shop-li-a clearfix">
              <div class="shop-left">
                <img class="shop-img" src="./images/shop/1.jpg" alt="">
              </div>
              <div class="shop-right">
                <section class="shop-info-header clearfix">
                  <h4 class="shop-title ellipsis">锄禾日当初，汗滴禾下土</h4>
                  <ul class="info-header-ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop-info-brief clearfix">
                  <section class="info-brief-left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating-section">3.6</div>
                    <div class="sales-section">月售106单</div>
                  </section>
                  <section class="info-brief-right">
                    <span class="needed-time">30分钟</span>
                    <span class="shop-distance">443m</span>
                  </section>
                </section>
                <section class="shop-delivery">
                  <section class="delivery-left">
                    <div class="delivery-msg">
                      <span>¥20起送</span>
                      <span class="segmentation">/</span>
                      <span>配送费约¥5</span>
                    </div>
                  </section>
                  <section class="delivery-right">
                    <span class="delivery-style">硅谷专送</span>
                  </section>
                </section>
              </div>
            </a>
          </li>
        </ul>  
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
  @import '~@/assets/styles/mixins.styl'

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
    .msite-shop-list
      margin-top 10px
      background-color #fff
      &::before
        height 1px
        border-top 1px solid #e4e4e4
      .shop-header
        padding 10px 10px 0
        color #999
        .shop-header-title
          font-size 14px
          line-height 20px
          margin-left 5px
      .shop-container
        margin-bottom 50px
        .shop-list
          .shop-li
            width 100%
            &::before
              height 1px
              top 100%
              border-bottom 1px solid #f1f1f1
            .shop-li-a
              display block
              box-sizing border-box
              width 100%
              padding 15px 8px
              .shop-left
                float left
                box-sizing border-box
                width 23%
                height 75px
                padding-right 10px
                .shop-img
                  width 100%
                  height 100%
              .shop-right
                float right
                width 77%
                .shop-info-header
                  width 100%
                  .shop-title
                    float left
                    width 200px
                    color #333
                    font-size 16px
                    line-height 16px
                    font-weight 700
                    &::before
                      content '品牌'
                      display inline-block
                      font-size 11px
                      line-height 11px
                      background-color #ffd930
                      padding 2px
                      border-radius 2px
                      margin-right 5px
                  .info-header-ul
                    float right
                    margin-top 3px
                    color #999
                    .supports
                      float left
                      font-size 10px
                      color #999
                      padding 0 2px
                      border 1px solid #f1f1f1
                      border-radius 2px
                .shop-info-brief
                  width 100%
                  margin-top 18px
                  margin-bottom 8px
                  .info-brief-left
                    float left
                    // color #ff9a0d
                    .star
                      float left
                      font-size 0
                      .star-item
                        display inline-block
                        background-repeat no-repeat
                      &.star-24
                        .star-item
                          width 10px
                          height 10px
                          margin-right 3px
                          background-size 10px 10px
                          &:last-child
                            margin-right 0
                          &.on
                            bg-image('./images/stars/star24_on')
                          &.half
                            bg-image('./images/stars/star24_half')
                          &.off
                            bg-image('./images/stars/star24_off')
                      &.star-36
                        .star-item
                          width 15px
                          height 15px
                          margin-right 6px
                          background-size 15px 15px
                          &:last-child
                            margin-right 0
                          &.on
                            bg-image('./images/stars/star36_on')
                          &.half
                            bg-image('./images/stars/star36_half')
                          &.off
                            bg-image('./images/stars/star36_off')
                      &.star-48
                        .star-item
                          width 20px
                          height 20px
                          margin-right 22px
                          background-size 20px 20px
                          &:last-child
                            margin-right 0
                          &.on
                            bg-image('./images/stars/star48_on')
                          &.half
                            bg-image('./images/stars/star48_half')
                          &.off
                            bg-image('./images/stars/star48_off')
                    .rating-section
                      float left
                    .sales-section
                      float left
                  .info-brief-right
                    float right
</style>
