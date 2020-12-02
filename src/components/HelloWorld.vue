<template>
<div class="btns">
  <div @click="routerLink('VueQr')">二维码</div>
  <div @click="routerLink('VueSwiper')">vue-awesome-swiper</div>
  <div @click="routerLink('MySwiper')">my-swiper</div>
  <div @click="routerLink('AMap')">AMap</div>
</div>
</template>

<script>
import VueQr from "vue-qr";
export default {
  components: {
    VueQr,
  },
  data() {
    return {
      logoSrc: require("../assets/logo.png"),
    };
  },
  methods: {
    routerLink(link) {
      this.$router.push({
        name: link,
      });
    },
  },
};
</script>

<style>
.btns div {
  padding: 10px 30px;
  background: red;
  margin-bottom: 10px;
}
</style>
