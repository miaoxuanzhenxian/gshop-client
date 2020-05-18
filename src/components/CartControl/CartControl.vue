<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-remove_circle_outline" v-if="food.count > 0" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count > 0">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="updateFoodCount(true)"></div><!-- @click.stop表示阻止单击事件继续传播，防止bug -->
  </div>

</template>

<script>
  export default {
    name: 'CartControl',

    props: {
      food: Object
    },

    methods: {
      updateFoodCount(isAdd) {
        this.$store.dispatch('shop/updateFoodCount', { isAdd, food: this.food })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~@/assets/styles/mixins.styl"

  .cartcontrol
    font-size 0
    .cart-decrease
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color rgb(0, 160, 220)

    .icon-remove_circle_outline
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active, &.move-leave-active // 过渡的类名
        transition all .5s // 写过度样式，通常使用transition
      &.move-enter, &.move-leave-to // 隐藏时的类名
        opacity 0 // 写隐藏时的样式
        transform translateX(15px) rotate(180deg)

    .cart-count
      display inline-block
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      font-size 10px
      color rgb(147, 153, 159)
    .icon-add_circle
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
</style>
