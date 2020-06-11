<template>
  <section class="search">
    <Header title="搜 索" />

    <form class="search-form clearfix" @submit.prevent="search">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search-input" v-model="keyword">
      <input type="submit" name="submit" class="search-submit">
    </form>

    <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <router-link :to="'/shop/' + item.id" exact tag="li" 
                      class="list_li clearfix border-1px" v-for="item in searchShops" :key="item.id">
          <section class="item_left">
            <img class="restaurant_img" :src="baseImgUrl + item.image_path" alt="img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span class="item_right_name ellipsis">{{item.name}}</span>
              </p>
              <p>月售 {{item.recent_order_num}} 单</p>
              <p>{{item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>

    <div class="search-none" v-else>很抱歉！无搜索结果</div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Search',

    data() {
      return {
        keyword: '',
        baseImgUrl: process.env.VUE_APP_BASE_SEARCHSHOPS_IMGURL,
        noSearchShops: false
      }
    },

    methods: {
      search() {
        // 得到搜索关键字
        const keyword = this.keyword.trim()
        // 进行搜索
        if (keyword) {
          this.$store.dispatch('msite/getSearchShops', { keyword })
        }
      }
    },

    computed: {
      ...mapState({
        searchShops: state => state.msite.searchShops
      })
    },

    watch: {
      searchShops(value) {
        if (!value.length) {
          this.noSearchShops = true
        } else {
          this.noSearchShops = false
        }
      }
    },

    beforeDestroy() {
      this.$store.dispatch('msite/clearSearchShops')
    }
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
    .list
      background #fff
      .list_li
        padding 10px 0
        &::before
          height 1px
          top 100%
          border-bottom 1px solid #ccc
        .item_left
          float left
          .restaurant_img
            width 60px
            height 60px
            vertical-align middle
            margin-right 10px
        .item_right
          float left
          .item_right_text
            .item_right_name
              display block
              width 260px
            >p:nth-of-type(2)
              margin 6px 0
    .search-none
      line-height 26px
      text-align center
</style>
