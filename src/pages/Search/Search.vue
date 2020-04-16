<template>
  <section class="search">
    <header class="header">
      <span class="header-title">
        <span class="header-title-text">搜 索</span>
      </span>
    </header>
    <form action="#" class="search-form clearfix">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search-input">
      <input type="submit" name="submit" class="search-submit">
    </form>
  </section>
</template>

<script>
  export default {
    name: 'Search'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search
    width 100%
    margin-bottom 50px
    .header
      position fixed
      z-index 100
      left 0
      right 0
      top 0
      background #02a774
      width 100%
      height 45px
      color #fff
      .header-search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
      .header-title
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)
        width 50%
        text-align center
        .header-title-text
          font-size 20px
          display block
      .header-login
        font-size 14px
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
    .search-form
      margin-top 45px
      background #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search-input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background #f2f2f2
        &.search-submit
          float right
          width 18%
          border 4px solid #02a774
          font-size 16px
          color #fff
          background #02a774
</style>
