<template>
  <section class="login">
    <div class="login-inner">
      <div class="login-header">
        <h2 class="login-logo-name">硅谷外卖</h2>
        <div class="login-header-title">
          <a class="on">短信登录</a>
          <a>密码登录</a>
        </div>
      </div>
      <div class="login-content">
        <form>
          <div class="on">
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号">
              <button disabled="disabled" class="get-verification btn">获取验证码</button>
            </section>
            <section class="login-message">
              <input type="tel" maxlength="8" placeholder="短信验证码">
            </section>
            <section class="login-hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a>《用户服务协议》</a>
            </section>
          </div>
          <div>
            <section class="login-message">
              <input type="text" maxlength="150" placeholder="手机/邮箱/用户名">
            </section>
            <section class="login-message">
              <input type="password" maxlength="32" placeholder="密码">
              <div class="switch-button off">
                <div class="switch-circle"></div>
                <span class="switch-text"></span>
              </div>
            </section>
            <section class="login-message">
              <input type="text" maxlength="8" placeholder="验证码">
              <img class="get-verification img-captcha" src="./images/captcha.svg" alt="captcha">
            </section>
          </div>
          <button class="login-submit">登录</button>
        </form>
        <a class="about-us">关于我们</a>
      </div>
      <a class="goback">
        <i class="iconfont icon-left-arrow"></i>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login
    position absolute
    top 0
    bottom 0
    width 100%
    background #fff
    .login-inner
      padding-top 60px
      width 80%
      margin 0 auto
      .login-header
        .login-logo-name
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login-header-title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid currentColor
      .login-content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login-message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get-verification
                position absolute
                right 10px
                top 50%
                transform translateY(-50%)
                border 0
                font-size 14px
                color #ccc
                background transparent
                &.btn
                  outline none
                &.img-captcha
                  width 150px
                  height 48px
              .switch-button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s
                width 30px
                height 16px
                line-height 16px
                padding 0 6px
                color #fff
                position absolute
                right 10px
                top 50%
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch-text
                    float right
                    color #ddd
                &.on
                  background #02a774
                .switch-circle
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  position absolute
                  top -1px
                  left -1px
                  box-shadow 0 2px 4px 0 rgba(0, 0, 0, .1)
                  transition transform .3s
            .login-hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login-submit
            display block
            margin-top 30px
            width 100%
            height 42px
            line-height 42px
            text-align center
            border 0
            border-radius 4px
            background #4cd96f
            font-size 16px
            color #fff
        .about-us
          display block
          margin-top 20px
          text-align center
          font-size 12px
          color #999
      .goback
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        .icon-left-arrow
          font-size 20px
          color #999  
      /* 自己通过伪元素来画左箭头
      .goback::after
        content ''
        position absolute
        top 5px
        left 8px
        width 11px
        height 11px
        color #009
        border-top 1px solid currentColor
        border-left 1px solid currentColor
        transform rotate(-45deg) */
</style>
