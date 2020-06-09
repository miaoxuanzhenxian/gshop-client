<template>
  <div>
    <ShopHeader />
    <div class="tab border-1px">
      <div class="tab-item">
        <!-- <router-link :to="`/shop/${$route.params.id}/goods`" exact replace>点餐</router-link> -->
        <router-link :to="`/shop/${id}/goods`" exact replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <!-- <router-link :to="`/shop/${$route.params.id}/ratings`" exact replace>评价</router-link> -->
        <router-link :to="`/shop/${id}/ratings`" exact replace>评价</router-link>
      </div>
      <div class="tab-item">
        <!-- <router-link :to="`/shop/${$route.params.id}/info`" exact replace>商家</router-link> -->
        <router-link :to="`/shop/${id}/info`" exact replace>商家</router-link>
      </div>
    </div>

    <!-- 缓存所有对应的路由组件对象: 离开时不死亡不销毁, 给缓存起来, 再请求时直接使用缓存的对应的路由组件对象，而不再重新创建了  好处: 复用路由组件对象, 复用路由组件获取的后台数据。 -->
    <!-- <keep-alive> -->
      <router-view />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
  import ShopHeader from './ShopHeader/ShopHeader'

  export default {
    name: 'Shop',

    props: ['id'],

    components: {
      ShopHeader
    },

    mounted() {
      const id = this.id
      this.$store.dispatch('shop/getShopGoods', { id })
      this.$store.dispatch('shop/getShopRatings', { id })
      this.$store.dispatch('shop/getShopInfo', { id })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped> 
  .tab
    height 40px
    line-height 40px
    background #fff
    &::before
      height 1px
      top 100%
      border-bottom 1px solid rgba(7, 17, 27, 0.1)
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            transform translateX(-50%)
            bottom 1px
            width 35px
            height 2px
            background currentColor
</style>
