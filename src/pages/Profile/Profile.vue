<template>
  <section class="profile">
    <header class="header">
      <span class="header-title">
        <span class="header-title-text">我 的</span>
      </span>
    </header>
    <section class="profile-user">
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
    <section class="profile-my-order"></section>
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
    background-color #f5f5f5
    .header
      position fixed
      z-index 100
      left 0
      right 0
      top 0
      background-color #02a774
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
        reght 15px
        top 50%
        transform translateY(-50%)
    .profile-user
      margin-top 46px
      .user-link
        position relative
        color #fff
        display block
        background-color #02a774
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
            background-color #e4e4e4
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
            font-size 5px
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
    // .profile-my-order
    //   margin-top 10px
    //   border-top 1px solid #e4e4e4
</style>
