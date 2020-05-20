<template>
  <div class="goods">
    <div class="menu-wrapper" ref="leftWrapper">
      <ul>
        <li class="menu-item" :class="{current: index === currentIndex}"  
          v-for="(good, index) in goods" :key="good.name" ref="menuItems" @click.stop="selectMenuItem(index)"><!-- @click.stop表示阻止单击事件继续传播，防止bug -->
          <span class="text border-1px">
            <img class="icon" v-if="good.icon" :src="good.icon">
            {{good.name}}
          </span>
        </li>
      </ul>
    </div>

    <div class="foods-wrapper" ref="rightWrapper">
      <ul ref="rightUl" id="testaa">
        <li class="food-list-hook" v-for="good in goods" :key="good.name" ref="foodList">
          <h1 class="title">{{good.name}}</h1>
          <ul ref="">
            <li class="food-item border-1px" v-for="food in good.foods" :key="food.name">
              <div class="icon">
                <img width="57" height="57" :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span></div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <CartControl :food="food" />
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    
    <!-- 购物车 -->
    <ShopCart />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import BScroll from 'better-scroll'

  import ShopCart from './ShopCart/ShopCart'

  export default {
    name: 'Goods',

    components: {
      ShopCart
    },

    data() {
      return {
        scrollY: 0, // 右侧滑动的y轴坐标: scrollY, 初始为0, 滑动右侧过程中实时改变、更新 
        tops: [] // 右侧所有分类li的top的数组: tops, 初始值为[], 在列表显示之后统计一次即可
      }
    },

    computed: {
      ...mapState({
        goods: state => state.shop.goods
      }),

      /*
        当前分类的下标
      */
      currentIndex() {
        const { scrollY, tops } = this
        return tops.findIndex((top, index) => scrollY >= top && scrollY < tops[index + 1])
      }
    },

    mounted() {
      if (this.goods.length > 0) { // 如果数据已经有了
        this._initScroll()
        this._initTops()
      }
    },

    beforeDestroy() {
      this.leftScroll.destroy() // 销毁 better-scroll，解绑事件。
      this.rightScroll.destroy() // 销毁 better-scroll，解绑事件。
    },

    watch: {
      goods() { // goods开始没有数据了，后来有了数据，注意better-scroll老版本需要new BScroll()在对应的状态数据更新且对应的界面更新之后才能正常运行，因此需要watch监测goods这一步; 但在新版本better-scroll中，则已经内部处理了解决了这个问题，因此不再需要new BScroll()在对应的状态数据更新且对应的界面更新之后了，也就不再需要watch监测goods这一步了，因此只需要在mounted生命周期方法中直接new BScroll()即可
        this.$nextTick(() => {
          this._initScroll()
          this._initTops()
        })
      },

      /*
        监控currentIndex计算属性，当currentIndex发生变化，计算得到新的下标时，让左侧列表滑动到新下标对应的li处，即让左侧列表滑动到当前分类处; 但若左侧列表因为高度不够等原因不能滑动到对应的li处，则better-scroll库在内部对这种情况做了自动处理，会使得其滑动到在已有高度允许内的极限处，但不会超过已有高度范围，即不会强行超过已有高度允许范围到达对应的li处，但会到达对应的li的极限处，至少会让li处于可见范围内; 于是这样就以此来实现了让左侧当前分类在右侧滑动时始终可见的功能
      */
      currentIndex(newValue) {
        const li = this.$refs.menuItems[newValue]
        // 让左侧列表滑动到新下标对应的li处，即让左侧列表滑动到当前分类处
        this.leftScroll.scrollToElement(li, 300)
      }
    },

    methods: {
      // 方法名加下划线是为了与事件回调函数方法相区分
      _initScroll() {
        if (!this.leftScroll) { // 加个判断，表示如果better-scroll对象已经建立、已经有了，则不再重新建立，以防止better-scroll分发两次自定义的click点击事件，从而导致它及它的子组件中click点击执行两次的bug
          this.leftScroll = new BScroll(this.$refs.leftWrapper, {
            click: true // 分发自定义的click点击事件,better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
          })
        } else {
          this.leftScroll.refresh() // refresh()重新刷新、重新计算 better-scroll，重新统计内容的高度，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
        }
        
        if (!this.rightScroll) { // 加个判断，表示如果better-scroll对象已经建立、已经有了，则不再重新建立，以防止better-scroll分发两次自定义的click点击事件，从而导致它及它的子组件中click点击执行两次的bug
          this.rightScroll = new BScroll(this.$refs.rightWrapper, {
            click: true, // 分发自定义的click点击事件,better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
            // probeType: 2 // 触摸滑动  实时(高频)
            // probeType: 3 // 触摸/惯性/编码滑动  实时(高频)  注：触摸/惯性/编码滑动时都会触发已经监听的scroll事件
            probeType: 1 // 触摸滑动  非实时(低频)  会减少性能、效率的损耗
          })
        } else {
          this.rightScroll.refresh() // refresh()重新刷新、重新计算 better-scroll，重新统计内容的高度，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
        }

        // 给rightScroll绑定scroll的监听
        this.rightScroll.on('scroll', ({ y }) => {
          this.scrollY = Math.abs(y)
        })
        // 给rightScroll绑定scrollEnd的监听，触摸/惯性/编码滑动时都会触发已经监听的scrollEnd事件
        this.rightScroll.on('scrollEnd', ({ y }) => {
          this.scrollY = Math.abs(y)
        })
      },
      
      // 方法名加下划线是为了与事件回调函数方法相区分
      _initTops() {
        const tops = []
        let top = 0
        tops.push(top)

        // const lis = this.$refs.rightUl.children
      //  /* 通过.children获取的节点集合虽然是一个类数组(伪数组)，但其内部内置了处理了forEach()方法，因此它可以调用forEach方法；除此之外通过document.querySelectorAll()方法获得的节点集合也是一个类数组(伪数组)，其内部也内置了处理了forEach()方法，因此它也可以调用forEach方法 */
      //   lis.forEach(li => {
      //     console.log(li)
      //   })

        // // 通过Array.prototype.forEach.call(lis, li => {})方式可以让类数组(伪数组)调用forEach()方法
        // Array.prototype.forEach.call(lis, li => {
        //   top += li.clientHeight
        //   tops.push(top)
        // })
        
        // 当 v-for 用于元素或组件的时候，使用ref引用信息将是包含DOM节点或组件实例的真数组，哪怕只有一个时，只要含有v-for，那得到的也是含有一个元素的真数组
        const lis = this.$refs.foodList
        lis.forEach(li => {
          top += li.clientHeight
          tops.push(top)
        })
        // 更新tops数据,在循环外面赋值，这样就只更新一次，提高效率
        this.tops = tops
      },

      selectMenuItem(index) {
        // 得到对应的top
        const top = this.tops[index]

        // 立即更新scrollY
        this.scrollY = top

        // 让右侧列表滑动到对应位置
        this.rightScroll.scrollTo(0, -top, 300)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~@/assets/styles/mixins.styl'

  .goods
    display: flex
    position: absolute
    top: 225px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          font-size: 12px
          &::before
            height 1px
            top 100%
            border-bottom 1px solid rgba(7, 17, 27, 0.1)
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        // bottom-border-1px(rgba(7, 17, 27, 0.1))
        &::before
          height 1px
          top 100%
          border-bottom 1px solid rgba(7, 17, 27, 0.1)
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
