<template lang="pug">
//- 請填寫功能描述👈
#Card1Item
  .mask-text
    .cursor {{"Hello World !!"}}
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted } from "vue";
const { proxy } = getCurrentInstance()!;
const $gsap = proxy!.$gsap;
// -------------------------------------------------------------------------------------------------
// onMounted(() => {
//   gsap.to(".typing1", {
//     text: "這裡是第一段", //text屬性將自動為DOM元素嵌入我們所輸入的文字
//     duration: 1.5,
//     scrollTrigger: {
//       trigger: ".typing1",
//       toggleActions: "play pause resume reset", //見備註
//     },
//   });
// });
</script>

<style lang="scss" scoped>
// 佈局
#Card1Item {
  padding: 20px;
  @include size;
  @include center;
  font-weight: 700;
  @include web-media {
    font-size: 150px;
  }
  @include mobile-media {
    font-size: 80px;
  }
}
// 組件
#Card1Item {
  .mask-text {
    background: url(@/assets/svg/bg-star.svg);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: cover;
  }
}
</style>
