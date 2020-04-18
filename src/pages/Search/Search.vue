<template>
  <section class="search">
    <Header title="搜 索" />
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
