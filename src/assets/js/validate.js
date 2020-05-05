import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
import { required, regex } from 'vee-validate/dist/rules' // 导入验证规则
import zh_CN from 'vee-validate/dist/locale/zh_CN' // 加载语言包


// 提示信息本地化
localize('zh_CN', {
  // 根据name属性名称映射对应的中文提示名称
  names: {
    phone: '手机号',
    code: '验证码',
    name: '用户名',
    pwd: '密码',
    captcha: '验证码'
  },
  // 指定提示文本的为中文
  messages: zh_CN.messages
  // messages: {
  //   // your messages.
  //   _default: (field) => `${field}无效`,
  //   after: (field, [target]) => `${field}必须在${target}之后`,
  //   alpha_dash: (field) => `${field}能够包含字母数字字符、破折号和下划线`,
  //   alpha_num: (field) => `${field}只能包含字母数字字符`,
  //   alpha_spaces: (field) => `${field}只能包含字母字符和空格`,
  //   alpha: (field) => `${field}只能包含字母字符`,
  //   before: (field, [target]) => `${field}必须在${target}之前`,
  //   between: (field, [min, max]) => `${field}必须在${min}与${max}之间`,
  //   confirmed: (field, [confirmedField]) =>
  //     `${field}不能和${confirmedField}匹配`,
  //   credit_card: (field) => `${field}格式错误`,
  //   date_between: (field, [min, max]) => `${field}必须在${min}和${max}之间`,
  //   date_format: (field, [format]) => `${field}必须符合${format}格式`,
  //   decimal: (field, [decimals = '*'] = []) =>
  //     `${field}必须是数字，且能够保留${
  //       decimals === '*' ? '' : decimals}位小数`,
  //   digits: (field, [length]) =>
  //     `${field}必须是数字，且精确到${length}位数`,
  //   dimensions: (field, [width, height]) =>
  //     `${field}必须在${width}像素与${height}像素之间`,
  //   email: (field) => `${field}不是一个有效的邮箱`,
  //   ext: (field) => `${field}不是一个有效的文件`,
  //   image: (field) => `${field}不是一张有效的图片`,
  //   included: (field) => `${field}不是一个有效值`,
  //   integer: (field) => `${field}必须是整数`,
  //   ip: (field) => `${field}不是一个有效的地址`,
  //   length: (field, [length, max]) => {
  //     if (max) {
  //       return `${field}长度必须在${length}到${max}之间`
  //     }
  //     return `${field}长度必须为${length}`
  //   },
  //   max: (field, [length]) => `${field}不能超过${length}个字符`,
  //   max_value: (field, [max]) => `${field}必须小于或等于${max}`,
  //   mimes: (field) => `${field}不是一个有效的文件类型`,
  //   min: (field, [length]) => `${field}必须至少有${length}个字符`,
  //   min_value: (field, [min]) => `${field}必须大于或等于${min}`,
  //   excluded: (field) => `${field}不是一个有效值`,
  //   numeric: (field) => `${field}只能包含数字字符`,
  //   regex: (field) => `${field}格式无效`,
  //   required: (field) => `请输入${field}`,
  //   url: (field) => field + '不是一个有效的url'
  // }
})

// 添加验证规则
extend('required', required)
extend('regex', {
  ...regex,
  // message: '{_field_}' + '不正确'
  message: field => field + '不正确'
})

// 添加自定义验证规则，手机号码验证
extend('phone', {
  // 提示信息
  // message: field => field + '格式不正确',
  message: '手机号格式不正确',
  // 验证函数
  validate: value => value.length === 11 && /^(((13[0-9]{1})|(14[57]{1})|(15[012356789]{1})|(17[03678]{1})|(18[0-9]{1})|(19[89]{1})|(16[6]{1}))+\d{8})$/.test(value)
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
