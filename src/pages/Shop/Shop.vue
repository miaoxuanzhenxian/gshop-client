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
    <router-view />
  </div>
</template>

<script>
  import ShopHeader from './ShopHeader/ShopHeader'

  export default {
    name: 'Shop',

    props: ['id'],

    components: {
      ShopHeader
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
