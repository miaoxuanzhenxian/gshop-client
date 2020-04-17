<template>
  <section class="profile">
    <Header title="我 的" />
    <section class="profile-user" @click="$router.push('/login')">
      <a class="user-link clearfix">
        <div class="user-avatar">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-mobile">
              <i class="iconfont icon-mobile"></i>
            </span>
            <span class="mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-right-arrow"></i>
        </span>
      </a>
    </section>
    <section class="profile-property border-1px">
      <ul class="property-list">
        <li class="property-li">
          <a class="property-link">
            <span class="property-link-top">
              <span>0.00</span>元
            </span>
            <span class="property-link-bottom">我的余额</span>
          </a>
        </li>
        <li class="property-li">
          <a class="property-link">
            <span class="property-link-top">
              <span>0</span>个
            </span>
            <span class="property-link-bottom">我的优惠</span>
          </a>
        </li>
        <li class="property-li">
          <a class="property-link">
            <span class="property-link-top">
              <span>0</span>分
            </span>
            <span class="property-link-bottom">我的积分</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="profile-menu border-1px">
      <ul class="menu-items">
        <!-- 我的订单 -->
        <li class="menu-item">
          <a class="item-link">
            <span class="item-link-icon">
              <i class="iconfont icon-order"></i>
            </span>
            <div class="item-link-title">
              <span>我的订单</span>
            </div>
          </a>
        </li>
        <!-- 积分商城 -->
        <li class="menu-item">
          <a class="item-link">
            <span class="item-link-icon">
              <i class="iconfont icon-jifen"></i>
            </span>
            <div class="item-link-title">
              <span>积分商城</span>
            </div>
          </a>
        </li>
        <!-- 硅谷外卖会员卡 -->
        <li class="menu-item">
          <a class="item-link">
            <span class="item-link-icon">
              <i class="iconfont icon-vip"></i>
            </span>
            <div class="item-link-title">
              <span>硅谷外卖会员卡</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <section class="profile-menu border-1px">
      <ul class="menu-items">
        <!-- 服务中心 -->
        <li class="menu-item">
          <a class="item-link">
            <span class="item-link-icon">
              <i class="iconfont icon-fuwu"></i>
            </span>
            <div class="item-link-title">
              <span>服务中心</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'Profile'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .profile
    width 100%
    margin-bottom 50px
    .profile-user
      margin-top 46px
      .user-link
        position relative
        color #fff
        display block
        background #02a774
        padding 20px 10px
        .user-avatar
          float left
          width 60px
          height 60px
          border-radius 50%
          overflow hidden
          .icon-person
            font-size 62px
            color #7e8c8d
            background #e4e4e4
        .user-info
          float left
          margin-top 8px
          margin-left 15px
          p
            font-weight 700
            font-size 18px
            &.user-info-top
              padding-bottom 10px
            .user-mobile
              margin-left -4px
              .icon-mobile
                font-size 18px
                vertical-align text-bottom // 值是text-bottom时，把元素的底端与父元素字体的底端对齐。
            .mobile-number
              font-size 14px
        .arrow
          position absolute
          width 12px
          height 12px
          right 15px
          top 40%
          .icon-right-arrow
            font-size 12px
    .profile-property
      width 100%
      background #fff
      &::before
        height 1px
        top 100%
        border-bottom 1px solid #e4e4e4
      .property-list
        width 100%
        display flex
        .property-li
          flex 1
          border-right 1px solid #f1f1f1
          .property-link
            display flex
            text-align center
            flex-direction column
            .property-link-top
              font-size 14px
              color #333
              padding 15px 5px 10px
              span
                display inline-block
                font-size 30px
                line-height 30px
                color #f90
                font-weight 700
            .property-link-bottom
              font-size 14px
              color #666
              padding-bottom 10px
          &:nth-of-type(2)
            .property-link
              .property-link-top
                span
                  color #ff5f3e
          &:nth-of-type(3)
            border 0
            .property-link
              .property-link-top
                span
                  color #6ac20b
    .profile-menu
      margin-top 10px
      background #fff
      &::before
        border-bottom 1px solid #e4e4e4
        border-top 1px solid #e4e4e4
      .menu-items
        .menu-item
          &:last-child
            .item-link
              .item-link-title
                border-bottom 0
          .item-link
            display flex
            align-items center
            padding-left 15px
            .item-link-icon
              width 20px
              height 20px
              display flex
              align-items center
              >.iconfont
                margin-left -10px
                font-size 30px
              .icon-order
                color #02a774
              .icon-jifen
                color #ff5f3e
              .icon-vip
                color #f90
              .icon-fuwu
                color #02a774
            .item-link-title
              position relative
              width 100%
              padding 18px 0
              border-bottom 1px solid #f1f1f1
              font-size 16px
              color #333
              &::after
                content ''
                width 8px
                height 8px
                color #bbb
                border-top 1px solid currentColor
                border-left 1px solid currentColor
                position absolute
                top 50%
                right 15px
                transform translate3d(0, -50%, 0) rotate(135deg)
</style>
