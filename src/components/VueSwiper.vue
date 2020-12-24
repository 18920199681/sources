<template>
  <div class="vue-swiper-container">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../assets/logo.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/logo.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/logo.png" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        // effect: "coverflow",
        slidesPerView: 3,
        centeredSlides: true,
      },
    };
  },
};
</script>

<style lang="less" scoped>
.vue-swiper-container {
  width: 50%;
  .swiper-container {
    width: 100%;
    height: 300px;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      .swiper-slide {
        img {
          width: 100%;
          height: 100%;
        }
      }

      .swiper-slide-prev,
      .swiper-slide-next {
        height: 60%;
        top: 50%;
        transform: translateY(-50%);
        // transform: translate3d(0px, 0px, -99.8258px) rotateX(0deg);
        img {
          background: blue;
        }
      }

      .swiper-slide-active {
        height: 100%;
        img {
          width: 150%;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          z-index: 99;
          background: red;
        }
      }
    }
  }
}
</style>
