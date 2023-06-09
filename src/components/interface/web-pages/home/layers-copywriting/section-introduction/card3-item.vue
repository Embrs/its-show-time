<template lang="pug">
//- 請填寫功能描述👈
#Card3Item(ref="El_Card")
  img.bg(src="@/assets/images/bg/svg/bg-bestgon.svg")
  .mask-text(ref="El_MaskText")
    p.welocme {{"Welcome"}}
    p.other {{"to your visit"}}
</template>

<script setup lang="ts">

import { ref, getCurrentInstance, onMounted } from "vue";
const { proxy } = getCurrentInstance()!;
const { gsap } = proxy!.$gsap;

const El_Card = ref();
const El_MaskText = ref();

let CardAction: gsap.core.Tween;
let MaskAction: gsap.core.Tween;
onMounted(() => {
  CardAction = gsap.to(El_Card.value, {duration: 1, xPercent: -140, yPercent: 10, scale: .7, rotation: -20,  paused: true });
  MaskAction = gsap.fromTo(
    El_MaskText.value,
    { duration: 1, opacity: 0, scale: 2, filter: "blur(10px)", paused: true },
    { duration: 1, opacity: 1, scale: 1, filter: "blur(0px)", paused: true }
  );
});

const InitAction = () => {
  MaskAction.reverse();
};

const CardEnter = () => {
  CardAction.reverse();
  MaskAction.play();
};
const CardLeave = () => {
  CardAction.play();
  InitAction();
};

defineExpose({ InitAction, CardLeave, CardEnter});
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
    @include size;
    object-fit: cover;
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
