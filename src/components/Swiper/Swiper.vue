<template>
<div ref="swiperContainer" class="swiper-container" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
  <div ref="swiperSlideContainer" class="swiper-slide-container" @click="selectItem">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  props: {
    // 每屏slide数量
    slideNum: {
      type: Number,
      default: 1,
    },
    // 是否循环滚动
    loop: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mouseEventStart: false, // 鼠标事件开始
      mouseX: 0, // 鼠标位置
      startMouseX: 0, // 鼠标起始位置
      swiperContainer: null,
      swiperSlideContainer: null,
      leftEdge: 0,
      rightEdge: 0,
      centerSlide: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      this.swiperContainer = this.$refs.swiperContainer;
      this.swiperSlideContainer = this.$refs.swiperSlideContainer;

      this.swiperSlideContainer.innerHTML += this.swiperSlideContainer.innerHTML;

      let nodeLen = 0;
      this.swiperSlideContainer.childNodes.forEach((item) => {
        if (item.className && item.className === "swiper-slide") {
          nodeLen++;
          // 根据每屏需展示slide数量控制slide宽度
          item.style.width =
            this.swiperContainer.offsetWidth / this.slideNum + "px";
        }
      });

      // 根据slide数量改变盒子宽度
      this.swiperSlideContainer.style.width =
        this.swiperSlideContainer.childNodes[0].offsetWidth * nodeLen + "px";
    },
    onMouseDown(e) {
      this.startMouseX = this.mouseX = e.clientX || e.pageX;
      this.mouseEventStart = true;
    },
    onMouseMove(e) {
      this.mouseX = e.clientX || e.pageX;
      if (this.mouseEventStart) {
        this.leftEdge = this.mouseX - this.swiperSlideContainer.offsetLeft;
        this.rightEdge = this.swiperContainer.offsetWidth - this.mouseX;

        // 随着鼠标移动slides
        this.swiperSlideContainer.style.left =
          this.swiperSlideContainer.offsetLeft +
          (this.mouseX - this.startMouseX) +
          "px";

        // 左基线
        if (this.swiperSlideContainer.offsetLeft >= 0) {
          this.swiperSlideContainer.style.left = this.loop ?
            -(this.swiperSlideContainer.offsetWidth / 2) + "px" :
            "0px";
        }

        // 右基线
        if (
          -this.swiperSlideContainer.offsetLeft >=
          this.swiperSlideContainer.offsetWidth -
          this.swiperContainer.offsetWidth
        ) {
          this.swiperSlideContainer.style.left = this.loop ?
            -(
              this.swiperSlideContainer.offsetWidth -
              this.swiperSlideContainer.offsetWidth / 2 -
              this.swiperContainer.offsetWidth
            ) + "px" :
            -(
              this.swiperSlideContainer.offsetWidth -
              this.swiperContainer.offsetWidth
            ) + "px";
        }
      }
    },
    onMouseUp() {
      this.mouseEventStart = false;

      const perWidth = this.swiperSlideContainer.childNodes[0].offsetWidth;
      const IMBIBITION_DIS = perWidth / 2;

      if (this.slideNum === 1) {
        this.centerSlide = 0;
      } else {
        this.centerSlide =
          this.slideNum % 2 === 0 ? this.slideNum / 2 : (this.slideNum - 1) / 2;
      }

      this.swiperSlideContainer.childNodes.forEach((item) => {
        // 每一个slide当前的位置
        let itemPos = this.swiperSlideContainer.offsetLeft + item.offsetLeft;

        if (item.className && item.className === "swiper-slide") {
          // 找出当前位于中间的slide
          if (
            itemPos > this.centerSlide * perWidth - IMBIBITION_DIS &&
            itemPos < this.centerSlide * perWidth + IMBIBITION_DIS
          ) {
            // console.log(item.innerHTML);
            // this.swiperSlideContainer.style.left = item.offsetLeft + "px";
          }
        }
      });
    },
    // 点击slides
    selectItem(e) {
      console.log(e.target.innerHTML);
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  .swiper-slide-container {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    left: 0;
  }
}
</style>
