<template>
<div class="swiper-box">
  <swiper :slideNum="3" :loop="true">
    <swiper-slide v-for="(item, index) in swiperList" :key="index">
      {{ item.content }}
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
import Swiper from "./Swiper/Swiper";
import SwiperSlide from "./Swiper/SwiperSlide";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperList: [{
          content: "test1",
        },
        {
          content: "test2",
        },
        {
          content: "test3",
        },
        {
          content: "test4",
        },
        {
          content: "test5",
        },
        {
          content: "test6",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.swiper-box {
  width: 50%;
  height: 300px;

  .swiper-slide {
    background: red;
  }
}
</style>
