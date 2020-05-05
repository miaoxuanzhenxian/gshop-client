<template>
  <section class="login">
    <div class="login-inner">
      <div class="login-header">
        <h2 class="login-logo-name">硅谷外卖</h2>
        <div class="login-header-title">
          <a :class="{on: loginType}" @click="loginType = true">短信登录</a>
          <a :class="{on: !loginType}" @click="loginType = false">密码登录</a>
        </div>
      </div>
      <div class="login-content">
        <form>
          <div :class="{on: loginType}">
            <ValidationObserver ref="phoneLogin">
              <ValidationProvider name="phone" rules="required|phone" v-slot="{ errors, valid }">
                <section class="login-message first-login-message">
                  <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
                  <button
                    :disabled="!isRightPhone || computeTime > 0" 
                    class="get-verification btn" 
                    :class="{'right-phone-number': isRightPhone}"
                    @click.prevent="getCode"
                  >
                    {{computeTime > 0 ? `短信已发送(${computeTime}s)` : '获取验证码'}}
                  </button>
                  <p class="validate-error-msg" v-show="!valid">{{ errors[0] }}</p>
                </section>
              </ValidationProvider>
              <ValidationProvider name="code" :rules="{required: true, regex: /^\d{6}$/}" #default="{ errors, valid }">
                <section class="login-message">
                  <input type="tel" maxlength="8" placeholder="短信验证码" v-model="code">
                  <p class="validate-error-msg" v-show="!valid">{{ errors[0] }}</p>
                </section>
              </ValidationProvider>
            </ValidationObserver>
            <section class="login-hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a>《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !loginType}">
            <section class="login-message first-login-message">
              <input type="text" maxlength="150" placeholder="手机/邮箱/用户名">
            </section>
            <section class="login-message">
              <input :type="isShowPwd ? 'text' : 'password'" maxlength="32" placeholder="密码">
              <div class="switch-button" :class="isShowPwd ? 'on' : 'off'" @click="isShowPwd = !isShowPwd">
                <div class="switch-circle" :class="{right: isShowPwd}"></div>
                <span class="switch-text">{{isShowPwd ? 'abc' : ''}}</span>
              </div>
            </section>
            <section class="login-message">
              <input type="text" maxlength="8" placeholder="验证码">
              <img class="get-verification img-captcha" src="./images/captcha.svg" alt="captcha">
            </section>
          </div>
          <button class="login-submit" @click.prevent="login">登录/注册</button>
        </form>
        <a class="about-us">关于我们</a>
      </div>
      <a class="goback" @click="$router.back()">
        <i class="iconfont icon-left-arrow"></i>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Login',

    data() {
      return {
        loginType: true, // true: 短信登录，false: 密码登录
        phone: '', // 手机号
        code: '', // 短信验证码
        computeTime: 0, // 计时剩余的时间，为0时没有计时了
        isShowPwd: false // 是否显示密码，默认不显示
      }
    },

    computed: {
      isRightPhone() {
        return /^1[3-9]\d{9}$/.test(this.phone)
      }
    },

    methods: {
      getCode() {
        // 将computeTime设置为计时的最大值
        this.computeTime = 59
        // 启动循环定时器，每隔1s将computeTime减1
        const intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime <= 0) {
            this.computeTime = 0
            clearInterval(intervalId)
          }
        }, 1000)

        this.$once('hook:beforeDestroy', () => { // 通过一个程序化的侦听器$once监听beforeDestroy生命周期钩子(此时在this.$once的回调函数内执行语句就相当于beforeDestroy生命周期钩子函数内执行语句)，在组件被销毁之前，清除定时器。 注：this.$once作用是监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除。
          clearInterval(intervalId)
        })
      },

      async login() {
        // 进行前台表单验证
        console.log(this.$refs.phoneLogin)
        const success = await this.$refs.phoneLogin.validate()
        if (success) {
          console.log('test')
        }
      }
    }
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
              // margin-top 16px
              margin-top 22px
              height 48px
              font-size 14px
              background #fff
              &.first-login-message
                margin-top 16px
              .get-verification
                position absolute
                right 10px
                top 50%
                transform translateY(-50%)
                border 0
                font-size 14px
                color #ccc
                background transparent
                &.right-phone-number
                  color black
                &.btn
                  outline none
                &.img-captcha
                  width 150px
                  height 48px
              .validate-error-msg
                color red
                margin-top 4px
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
                  &.right
                    transform translateX(27px)
            .login-hint
              margin-top 22px
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
