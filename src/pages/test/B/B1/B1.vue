<template>
  <div>
    B1组件
  </div>
</template>

<script>
  export default {
    name: 'B1',

    beforeRouteEnter(to, from, next) {
      next(component => {
        component.intervalId = setInterval(() => {
          console.log('做些事情...')
        }, 1000)
      })
    },

    beforeRouteLeave(to, from, next) {
      clearInterval(this.intervalId)
      next()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
</style>
