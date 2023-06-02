<template lang="pug">
//- 請填寫功能描述👈
#Card3Item
  .mask-text
    p.welocme {{"Welcome"}}
    p.other {{"to your visit"}}
</template>

<script setup lang="ts">
const InitAction = (scrollTL:  gsap.core.Timeline) => {
  scrollTL.from(".welocme", {x: -100, opacity: 0 });
  // scrollTL.from("#Card3Item > * > .other", {y: "100vh"});
};
defineExpose({InitAction});
</script>

<style lang="scss" scoped>
// 佈局
#Card3Item {
  background-color: #49B2DF;
  padding: 20px;
  @include center;
  @include mobile-media {
    padding: 20px;
  }
}
// 組件
#Card3Item {
  .mask-text {
    background: url(@/assets/svg/bg-bestgon.svg);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: cover;
    text-align: center;
  }
  .welocme {
    font-size: 150px;
    font-weight: 700;
    letter-spacing: 4px;
    line-height: 130px;
    @include mobile-media {
      font-size: 80px;
      letter-spacing: 0px;
      line-height: 80px;
    }
  }
  .other {
    font-size: 110px;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 130px;
    @include mobile-media {
      font-size: 50px;
      letter-spacing: 0px;
      line-height: 80px;
    }
  }
}
</style>
