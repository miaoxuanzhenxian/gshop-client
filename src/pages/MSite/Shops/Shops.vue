<template>
  <!-- 首页附近商家 -->
  <div class="msite-shop-list border-1px">
    <div class="shop-header">
      <span>
        <i class="iconfont icon-xuanxiang"></i>
      </span>
      <span class="shop-header-title">附近商家</span>
    </div>
    <div class="shop-container">
      <ul class="shop-list" v-if="shops.length > 0">
        <li class="shop-li border-1px" v-for="shop in shops" :key="shop.id" @click="$router.push(`/shop/${shop.id}`)">
          <a class="shop-li-a clearfix">
            <div class="shop-left">
              <img class="shop-img" :src="baseImgUrl + shop.image_path" :alt="shop.name">
            </div>
            <div class="shop-right">
              <section class="shop-info-header clearfix">
                <h4 class="shop-title ellipsis">{{shop.name}}</h4>
                <ul class="info-header-ul">
                  <li class="supports" v-for="support in shop.supports" :key="support.id">{{support.icon_name}}</li>
                </ul>
              </section>
              <section class="shop-info-brief clearfix">
                <section class="info-brief-left">
                  <Star :score="shop.rating" :size="24" />
                  <div class="rating-section">{{shop.rating}}</div>
                  <div class="sales-section">月售{{shop.recent_order_num}}单</div>
                </section>
                <section class="info-brief-right">
                  <span>{{shop.order_lead_time}}</span>
                  <span class="shop-distance">{{shop.distance}}</span>
                </section>
              </section>
              <section class="shop-delivery clearfix">
                <section class="delivery-left">
                  <div class="delivery-msg">
                    <span>¥{{shop.float_minimum_order_amount}}起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥{{shop.float_delivery_fee}}</span>
                  </div>
                </section>
                <section class="delivery-right">
                  <span class="delivery-style">{{shop.delivery_mode.text}}</span>
                </section>
              </section>
            </div>
          </a>
        </li>
      </ul>
      <ul v-else>
        <li>
          <img src="./images/shop_back.svg" alt="loading">
        </li>
        <li>
          <img src="./images/shop_back.svg" alt="loading">
        </li>
        <li>
          <img src="./images/shop_back.svg" alt="loading">
        </li>
        <li>
          <img src="./images/shop_back.svg" alt="loading">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Shops',

    data() {
      return {
        baseImgUrl: process.env.VUE_APP_BASE_IMGURL
      }
    },

    computed: {
      ...mapState({
        shops: state => state.msite.shops
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .msite-shop-list
    margin-top 10px
    background #fff
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
      min-height 1px
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
                  line-height 18px
                  font-weight 700
                  &::before
                    content '品牌'
                    display inline-block
                    font-size 11px
                    line-height 11px
                    background #ffd930
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
                margin-top 17px
                margin-bottom 12px
                .info-brief-left
                  float left
                  .rating-section
                    float left
                    font-size 12px
                    color #ff6000
                    margin-left 4px
                  .sales-section
                    float left
                    font-size 12px
                    color #666
                    margin-left 10px
                    // font-size 12px // 手机浏览器的字体大小最小只能为12px,若小于12px，则显示出来的效果还是12px，若想显示出来的效果能达到10px，则需用transform: scale(.8)来强行缩小0.8倍的12px的字体，使其显示出来的效果达到9.6px(即10px)的字体大小
                    // transform scale(.8)
                .info-brief-right
                  float right
                  font-size 12px
                  color #666
                  .shop-distance
                    &::before
                      content ''
                      display inline-block
                      width 1px
                      height 6px
                      margin 0 3px
                      background #ccc
              .shop-delivery
                width 100%
                .delivery-left
                  float left
                  .delivery-msg
                    font-size 12px
                    color #666
                    .segmentation
                      color #ccc
                      margin 0 4px
                .delivery-right
                  float right
                  font-size 0 // 解决子元素是inline-block类型标签时会将父元素撑大的bug
                  .delivery-style
                    font-size 12px
                    color #02a774
                    padding 1px
                    border 1px solid #02a774
                    border-radius 2px
                    display inline-block
                    transform scale(.8) // 注意:当transform: scale()压缩时,被压缩的元素若是inline类型(display为inline)的行内元素，则压缩不起作用(相当于transform: scale();无效); 但若被压缩的元素是inline-block类型或block类型或浮动的元素，则可以压缩，压缩会起作用; 因此若想使用transform: scale()缩放元素，则该元素不能是inline类型的行内元素，必须是(或者说用display或float转为)inline-block类型的行内块元素或block类型的块元素类型或添加了浮动float的元素才行
                    transform-origin right top
</style>
