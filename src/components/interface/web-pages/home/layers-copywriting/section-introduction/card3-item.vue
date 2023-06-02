<template lang="pug">
//- 請填寫功能描述👈
#Card3Item
  img.bg(src="@/assets/svg/bg-bestgon.svg")
  .mask-text
    p.welocme {{"Welcome"}}
    p.other {{"to your visit"}}
</template>

<script setup lang="ts">
const InitAction = (scrollTL:  gsap.core.Timeline) => {
  scrollTL.from("#Card3Item > * > .welocme", { opacity:0, scale: 4, filter: "blur(40px)" });
  scrollTL.from("#Card3Item > * > .other", { opacity:0, scale: 4, filter: "blur(40px)" });
  // scrollTL.from("#Card3Item > * > .other", {y: "100vh"});
};
defineExpose({InitAction});
</script>

<style lang="scss" scoped>
// 佈局
#Card3Item {
  @include center;
  color: #49B2DF;
  background-color: #49B2DF;
  padding: 20px;
  @include web-media {
    @include stroke(10, #fff);
  }
  @include mobile-media {
    @include stroke(4, #fff);
    padding: 20px;
  }
}
// 組件
#Card3Item {
  position: relative;
  .bg {
    @include absolute;
    object-fit: cover;
    // mix-blend-mode: hard-light;
    opacity: .2;
  }
  .mask-text {
    -webkit-background-clip: text;
    background-clip: text;
    background-size: cover;
    text-align: center;
  }
  .welocme {
    font-size: 150px;
    font-weight: 700;
    letter-spacing: 10px;
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
    letter-spacing: 6px;
    line-height: 130px;
    @include mobile-media {
      font-size: 50px;
      letter-spacing: 0px;
      line-height: 70px;
    }
  }
}

</style>
