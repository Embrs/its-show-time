<template lang="pug">
//- 請填寫功能描述👈
#Card3Item
  img.bg(src="@/assets/images/bg/svg/bg-bestgon.svg")
  .mask-text
    p.welocme {{"Welcome"}}
    p.other {{"to your visit"}}
</template>

<script setup lang="ts">

import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance()!;
const { gsap } = proxy!.$gsap;

const StartAction = () => {
  gsap.fromTo(
    "#Card3Item > * > .welocme", 
    { opacity: 0, scale: 4, filter: "blur(40px)", duration: 1 },
    { opacity: 1, scale: 1, filter: "blur(0)", duration: 1 }
  );
  gsap.fromTo(
    "#Card3Item > * > .other",
    { opacity: 0, scale: 4, filter: "blur(40px)", duration: 1 },
    { opacity: 1, scale: 1, filter: "blur(0)", duration: 1 }
  );
};

const InitAction = () => {
  gsap.to("#Card3Item > * > .welocme", { opacity:0, scale: 1, filter: "blur(0)", duration: 0 });
  gsap.to("#Card3Item > * > .other", { opacity:0, scale: 1, filter: "blur(0)", duration: 0 });
};

const CardLeave = () => {
  gsap.to("#Card3Item", { duration: 1, xPercent: -140, yPercent: 10, scale: .7, rotation: -20, ease: "expo" });
  InitAction();
};

const CardBack = () => {
  gsap.to("#Card3Item", { duration: 1, xPercent: 0 ,yPercent: 0, scale: 1, rotation: 0, ease: "expo" });
  StartAction();
};
defineExpose({ StartAction, InitAction, CardLeave, CardBack});
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
    opacity: 0;
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
    opacity: 0;
    @include mobile-media {
      font-size: 50px;
      letter-spacing: 0px;
      line-height: 70px;
    }
  }
}

</style>
