<template lang="pug">
//- 請填寫功能描述👈
#Card1Item
  .mask-text
    span.text 👋🏻
</template>

<script setup lang="ts">
const InitAction = (scrollTL:  gsap.core.Timeline) => {
  console.log("aa");
  scrollTL.to("#Card1Item > * > .text", {
    text: "Hello World !!", //text屬性將自動為DOM元素嵌入我們所輸入的文字
    duration: 2,
    toggleActions: "play pause resume reset", //見備註
    // scrollTrigger: {
    //   trigger: "#Card1Item > * > .text",
    // },
  });
};
defineExpose({InitAction});
</script>

<style lang="scss" scoped>
// 佈局
#Card1Item {
  background-color: #F3F7F0;
  text-shadow: 10px 9px 2px #00000036;
  padding: 20px;
  @include size;
  @include center;
  font-weight: 700;
  @include web-media {
    font-size: 160px;
  }
  @include pad-media {
    font-size: 80px;
  }
  @include phone-media {
    font-size: 80px;
    text-align: center;
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
