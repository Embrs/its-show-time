<template lang="pug">
//- 請填寫功能描述👈
#Card1Item
  .mask-text
    span.text 👋🏻
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance()!;
const { gsap } = proxy!.$gsap;

const TextAction = (text: string, delay: number = 0) =>  {
  gsap.to("#Card1Item > * > .text", {
    text,
    duration: 1,
    delay
  });
};
const StartAction = () => {
  TextAction("Hello World !!", 1);
};

const InitAction = () => {
  TextAction("");
};

const CardLeave = () => {
  gsap.to("#Card1Item", {duration: 1, xPercent: -140 ,yPercent: 10, scale: .7, rotation: -20, ease: "expo"});
  InitAction();
};

const CardBack = () => {
  gsap.to("#Card1Item", {duration: 1, xPercent: 0 ,yPercent: 0, scale: 1, rotation: 0, ease: "expo"});
  StartAction();
};
defineExpose({ StartAction, InitAction, CardLeave, CardBack});
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
    background: url(@/assets/images/bg/svg/bg-star.svg);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: cover;
  }
}
</style>
