<template>
<div class="swiper-slide">
  <slot></slot>
</div>
</template>

<style lang="less" scoped>
.swiper-slide {
  width: 100%;
  height: 100%;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
</style>
