<template>
  <div class="loading">
    <svg class="spin" viewBox="0 0 1024 1024" p-id="2184"><path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 128a298.666667 298.666667 0 1 0 0 597.333334 298.666667 298.666667 0 0 0 0-597.333334z" fill="#ff0000" fill-opacity=".05" p-id="2185"></path><path d="M813.696 813.696c166.613333-166.613333 166.613333-436.778667 0-603.392-166.613333-166.613333-436.778667-166.613333-603.392 0A64 64 0 0 0 300.8 300.8a298.666667 298.666667 0 1 1 422.4 422.4 64 64 0 0 0 90.496 90.496z" fill="#ff0000" p-id="2186"></path></svg>
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loading
    position absolute
    z-index 700
    top 50%
    left 50%
    transform translate(-50%, -50%)
    .spin
      width 30px
      height 30px
      animation loadingCircle 1s infinite linear
      @keyframes loadingCircle
        100%
          transform rotate(360deg)
</style>
