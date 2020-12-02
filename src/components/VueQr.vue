<template>
<div>
  <vue-qr text="https://www.baidu.com" :logoSrc="logoSrc" :logoCornerRadius="0" :logoMargin="0"></vue-qr>
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
    test(dataUrl, id) {
      console.log(url, id);
    },
  },
};
</script>
