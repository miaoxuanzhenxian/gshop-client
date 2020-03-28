<template>
  <div id="app">
    App
    <Button>test</Button>
    <div class="box1">box1</div> <!-- box1:不处理1px边框,带40px圆角 -->
    <div class="box2">box2</div> <!-- box2:缩小2倍处理1px边框,带40px圆角 -->
    <div class="box3 border-1px">box3</div> <!-- box3:通过伪类，根据不同屏幕像素比，缩小相应倍数处理1px边框,带40px圆角(也能处理带圆角)(注:实际项目中，若用的是预编译或者要做圆角，用此种方式) -->
    <div class="box4">box4</div> <!-- box4:缩小3倍处理1px边框,带40px圆角 -->
    <div class="box5">box5</div> <!-- box5:不处理1px边框,不带圆角 -->
    <div class="box6">box6</div> <!-- box6:缩小2倍处理1px边框,不带圆角 -->
    <Svg1pxBorder /> <!-- box7:通过postcss-write-svg插件的border-image,根据不同屏幕像素比，处理1px边框,不带圆角(不能处理带圆角)(注:实际项目中，若用的是预编译或者要做圆角，不能用此种方式) -->
    <div class="box8">box8</div> <!-- box8:缩小3倍处理1px边框,不带圆角 -->
  </div>
</template>

<script>
  import { Button } from 'mint-ui'

  import Svg1pxBorder from './Svg1pxBorder'
  export default {
    name: 'App',
    components: {
      Button,
      Svg1pxBorder
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  // @import '~@/assets/styles/mixins.styl'

  #app
    padding-left 40px
    div
      margin-top 4%
  .box1
    width 200px
    height 200px
    background-color yellow
    border 1px solid red
    border-radius 40px
  .box2
    width 200px
    height 200px
    background-color yellow
    position relative
    border none
    border-radius 40px
    // border-bottom-right-radius 40px
    // border-bottom-left-radius 40px
    &::before
      content ''
      position absolute
      top 0
      left 0
      width 200%
      height 200%
      box-sizing border-box
      transform scale(.5)
      transform-origin left top
      border 1px solid red
      border-radius 80px
      // border-bottom 1px solid red
      // border-bottom-right-radius 80px
      // border-bottom-left-radius 80px
  .box3
    width 200px
    height 200px
    background-color yellow
    border-radius 40px
    &::before
      border 1px solid red
      @media only screen and (-webkit-min-device-pixel-ratio: 2)
        border-radius 10.667vw
      @media only screen and (-webkit-min-device-pixel-ratio: 3)
        border-radius 16vw
  .box4
    width 200px
    height 200px
    background-color yellow
    position relative
    border none
    border-radius 40px
    &::before
      content ''
      position absolute
      top 0
      left 0
      width 300%
      height 300%
      box-sizing border-box
      transform scale(.333333)
      transform-origin left top
      border 1px solid red
      border-radius 120px
  .box5
    width 200px
    height 200px
    background-color yellow
    border 1px solid red
  .box6
    width 200px
    height 200px
    background-color yellow
    position relative
    border none
    &::before
      content ''
      position absolute
      top 0
      left 0
      width 200%
      height 200%
      box-sizing border-box
      transform scale(.5)
      transform-origin left top
      border 1px solid red
  .box8
    width 200px
    height 200px
    background-color yellow
    position relative
    border none
    &::before
      content ''
      position absolute
      top 0
      left 0
      width 300%
      height 300%
      box-sizing border-box
      transform scale(.333333)
      transform-origin left top
      border 1px solid red
</style>
