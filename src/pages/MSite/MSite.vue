<template>
  <section class="msite">
    <!-- 首页头部 -->
    <Header :title="address.name || '正在定位中...'">
      <span class="header-search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header-login" slot="right">
        <span>登录|注册</span>
      </span>
    </Header>
    <!-- 首页导航 -->
    <nav class="msite-nav border-1px">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categories, index) in categoriesArr" :key="index">
            <a href="javascript:" class="link-to-food" v-for="c in categories" :key="c.id">
              <div class="food-container">
                <img :src="baseImgUrl + c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
        </div>
        <!-- 添加分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!-- 首页附近商家 -->
    <Shops />
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  import Shops from './Shops/Shops'

  export default {
    name: 'MSite',

    data() {
      return {
        baseImgUrl: process.env.VUE_APP_BASE_IMGURL
      }
    },

    components: {
      Shops
    },

    computed: {
      ...mapState(['address', 'categorys']),

      /*
        分类的二维数组
        一个小数组的最大长度为8
        一个小数组只能被添加到大数组中一次
      */
      categoriesArr() {
        const bigArr = []
        let smallArr = []
        const { categorys } = this

        // 遍历总数组
        categorys.forEach(c => {
          // 将小数组添加到大数组(一个小数组只能被添加到大数组中一次)
          if (smallArr.length === 0) {
            bigArr.push(smallArr)
          }

          // 将c添加到小数组
          smallArr.push(c)

          // 一个小数组的最大长度为8
          if (smallArr.length === 8) {
            smallArr = []
          }
        })

        return bigArr
      }
    },

    mounted() {
      this.$store.dispatch('getShops')
      this.$store.dispatch('getCategorys') // 其中内部要发请求，是异步操作，需要一定的时间

      /*
        创建Swiper对象的时机？ 必须在列表页面(列表数据)显示之后，才能正常工作、正常轮播
      */
      new Swiper('.swiper-container', {
        loop: true, // 循环模式
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .msite
    width 100%
    margin-bottom 50px
    .msite-nav
      margin-top 45px
      height 200px
      background #fff
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
</style>
