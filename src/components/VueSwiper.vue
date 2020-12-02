<template>
<div class="swiper-box">
  <div ref="topBox" class="top-box"></div>

  <swiper ref="bottomSwiper" :options="bottomSwiper">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
  </swiper>
</div>
</template>

<script>
export default {
  data() {
    return {
      bottomSwiper: {
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        loop: true,
        preventClicksPropagation: false,
        slideToClickedSlide: true,
        controller: {
          control: this.$refs.topSwiper
        },
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 10,
        on: {
          slideChange: () => {
            if (this.$refs.bottomSwiper.swiper) {
              console.log(this.$refs.bottomSwiper.swiper.clickedSlide.innerHTML);
              this.$refs.topBox.innerHTML = this.$refs.bottomSwiper.swiper.clickedSlide.innerHTML;
            }
          }
        }
      },
    }
  },
}
</script>

<style lang="less" scoped>
.swiper-box {
  width: 50%;
  height: 100px;
}

.top-box {
  background: red;
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
}

/deep/.swiper-container {
  height: 100%;

  .swiper-wrapper {
    .swiper-slide {
      background: blue;
    }
  }
}
</style>
