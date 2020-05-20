<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left" @click="toggleShow">
          <div class="logo-wrapper">
            <div class="logo" :class="{highlight: totalCount > 0}">
              <i class="iconfont icon-shopping_cart" :class="{highlight: totalCount > 0}"></i>
            </div>
            <div class="num" v-if="totalCount > 0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{highlight: totalCount > 0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{info.deliveryPrice}}元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">
            {{payText}}
          </div>
        </div>
      </div>
      <transition name="move">
        <div class="shopcart-list" v-show="listShow"><!-- 这里不能用v-if只能用v-show，因为v-if会销毁组件和创建组件，而在销毁完组件时，会将new better-scroll对象时加到ul上的用来滑动的style样式(transform: translate())也一起销毁掉；而在v-if又再次为true时，又再次创建组件时，并不会再次new better-scroll对象了，那就不会再向ul上加用来滑动的style样式(transform: translate())了，那自然就不能再滑动了；因此这里只能用v-show而不能用v-if -->
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty">清空</span>
          </div>
          <div class="list-content" ref="foods">
            <ul>
              <li class="food border-1px" v-for="food in cartFoods" :key="food.name">
                <span class="name">{{food.name}}</span>
                <div class="price"><span>￥{{food.price}}</span></div>
                <div class="cartcontrol-wrapper">
                  <CartControl :food="food" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" v-show="listShow" @click="toggleShow"></div>
    </transition>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    name: 'ShopCart',

    data() {
      return {
        isShow: false
      }
    },

    computed: {
      ...mapState({
        cartFoods: state => state.shop.cartFoods,
        info: state => state.shop.info
      }),

      ...mapGetters({
        totalCount: 'shop/totalCount',
        totalPrice: 'shop/totalPrice'
      }),

      payClass() {
        const { totalPrice } = this
        const { minPrice } = this.info

        return minPrice > totalPrice ? 'not-enough' : 'enough'
      },

      payText() {
        const { totalPrice } = this
        const { minPrice } = this.info

        if (totalPrice === 0) {
          return `￥${minPrice}元起送`
        } else if (minPrice > totalPrice) {
          return `还差￥${minPrice - totalPrice}元起送`
        } else {
          return '去结算'
        }
      },

      // 列表是否显示
      listShow() {
        if (this.totalCount === 0) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.isShow = false
          return false
        }

        // 如果列表显示了，创建滚动对象
        if (this.isShow) {
          this.$nextTick(() => {
            /* 
              单例对象: 单一的实例对象
              1. 创建对象前: 判断对象不存在才去创建
              2. 创建对象后: 保存创建的对象
            */
            if (!this.scroll) { // 第一次打开
              this.scroll = new BScroll(this.$refs.foods, {
                click: true
              })
              this.$once('hook:beforeDestroy', () => {
                this.scroll.destroy()
              })
            } else { // 再次打开
              this.scroll.refresh() // 让滚动对象刷新: 重新计算 better-scroll，重新统计内容的高度，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
            }
          })
        }

        return this.isShow
      }
    },

    methods: {
      toggleShow() {
        if (this.totalCount > 0) {
          this.isShow = !this.isShow
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~@/assets/styles/mixins.styl"

  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    .content
      display: flex
      background: #141d27
      font-size: 0
      color: rgba(255, 255, 255, 0.4)
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: #141d27
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: #2b343c
            &.highlight
              background: $green
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: #80858a
              &.highlight
                color: #fff
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color: #ffffff
            background: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          padding-right: 12px
          box-sizing: border-box
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          font-size: 16px
          font-weight: 700
          &.highlight
            color: #fff
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 12px
          line-height: 24px
          font-size: 10px
      .content-right
        flex: 0 0 105px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 12px
          font-weight: 700
          &.not-enough
            background: #2b333b
          &.enough
            background: #00b43c
            color: #fff
    .shopcart-list
      position: absolute
      left: 0
      top: 0
      z-index: -1
      width: 100%
      transform translateY(-100%)
      &.move-enter-active, &.move-leave-active
        transition all .5s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateY(0)
      .list-header
        height: 40px
        line-height: 40px
        padding: 0 18px
        background: #f3f5f7
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        .title
          float: left
          font-size: 14px
          color: rgb(7, 17, 27)
        .empty
          float: right
          font-size: 12px
          color: rgb(0, 160, 220)

      .list-content
        padding: 0 18px
        max-height: 217px
        overflow: hidden
        background: #fff
        .food
          position: relative
          padding: 12px 0
          box-sizing: border-box
          // bottom-border-1px(rgba(7, 17, 27, 0.1))
          &::before
            height 1px
            top 100%
            border-bottom 1px solid rgba(7, 17, 27, 0.1)
          .name
            line-height 24px
            font-size 14px
            color rgb(7, 17, 27)
          .price
            position absolute
            right 90px
            bottom 12px
            line-height 24px
            font-size 14px
            font-weight 700
            color rgb(240, 20, 20)
          .cartcontrol-wrapper
            position absolute
            right 0
            bottom 6px

  .list-mask
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 40
    backdrop-filter blur(10px)
    opacity 1
    backdrop-filter: blur()
    background rgba(7, 17, 27, 0.6)
    &.fade-enter-active, &.fade-leave-active
      transition opacity .5s
    &.fade-enter, &.fade-leave-to
      opacity 0
</style>
