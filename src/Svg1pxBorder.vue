<template>
  <div>
    <div class="box7 svg-border-1px">box7</div> <!-- box7:通过postcss-write-svg插件的border-image,根据不同屏幕像素比，处理1px边框,不带圆角(不能处理带圆角)(注:实际项目中，若用的是预编译或者要做圆角，不能用此种方式) -->
  </div>
</template>

<script>
  export default {
    name: 'Svg1pxBorder'
  }
</script>

<style scoped>
  .box7 {
    width: 200px;
    height: 200px;
    background-color: yellow;
    border: 0; /* 做兼容 */
    border: 1px solid;
  }
</style>
