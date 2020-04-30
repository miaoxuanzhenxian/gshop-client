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
      <div class="swiper-container" v-if="categorys.length > 0">
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
      <div v-else>
        <img src="./images/msite_back.svg" alt="">
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

    /*
      方式1: watch + nextTick() 解决创建swiper对象之后不能正常轮播的问题
    */
    // watch: {
    //   // vue的处理过程  更新状态数据 ==> 调用对应的watch监视的回调函数 ==> 异步更新界面
    //   categorys() { // 一旦这个方法调用了，则说明categorys发生了改变/ 数组数据来了
    //     // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新
    //     this.$nextTick(() => {
    //       /*
    //         创建Swiper对象的时机？ 必须在列表页面显示之后，才能正常工作、正常轮播
    //       */
    //       new Swiper('.swiper-container', {
    //         loop: true, // 循环模式
    //         // 如果需要分页器
    //         pagination: {
    //           el: '.swiper-pagination'
    //         }
    //       })
    //     })
    //   }
    // },

    async mounted() {
      // 分发action, 异步获取商家列表
      this.$store.dispatch('getShops')
      // /*
      //   分发action, 异步获取分类列表,其中内部要发请求，是异步操作，需要一定的时间
      //   方式2: callback + nextTick() 解决创建swiper对象之后不能正常轮播的问题
      // */
      // this.$store.dispatch('getCategorys', () => { // categorys数据变化了
      //   // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新
      //   this.$nextTick(() => {
      //     /*
      //       创建Swiper对象的时机？ 必须在列表页面显示之后，才能正常工作、正常轮播
      //     */
      //     new Swiper('.swiper-container', {
      //       loop: true, // 循环模式
      //       // 如果需要分页器
      //       pagination: {
      //         el: '.swiper-pagination'
      //       }
      //     })
      //   })
      // })
      /*
        解决创建swiper对象之后不能正常轮播的问题
        原因: 创建对象的时机太早(必须在列表页面显示之后)
        解决: 
          1. watch + nextTick()
          2. callback + nextTick()
          3. 利用dispatch()返回的promise在状态更新且界面更新之后才成功的特点

        分发action, 异步获取分类列表,其中内部要发请求，是异步操作，需要一定的时间
        方式3: 利用dispatch()返回的promise 解决创建swiper对象之后不能正常轮播的问题
      */
      await this.$store.dispatch('getCategorys') // 返回的Promise在状态更新且界面更新之后才成功
      /*
        创建Swiper对象的时机？ 必须在列表页面显示之后，才能正常工作、正常轮播
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
