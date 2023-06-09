<template lang="pug">
//- 請填寫功能描述👈
#Card1Item(ref="El_Card")
  .mask-text
    span.text(ref="El_Text") {{"👋🏻"}}
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted, onBeforeUnmount } from "vue";
const { proxy } = getCurrentInstance()!;
const { gsap } = proxy!.$gsap;

const El_Card = ref();
const El_Text = ref();

let CardAction: gsap.core.Tween;
let TextAction: gsap.core.Tween;

onMounted( () => {
  CardAction = gsap.to(El_Card.value, {duration: 1, xPercent: -140 ,yPercent: 10, scale: .7, rotation: -20,  paused: true});
});
onBeforeUnmount(()=> {
  CardAction?.kill();
  TextAction?.kill();
});

const TextActionFlow = (text: string, delay: number = 0) =>  {
  TextAction = gsap.to(
    El_Text.value,
    {
      text,
      duration: 1,
      delay
    }
  );
};

const InitAction = () => {
  TextActionFlow("");
};

const CardEnter = () => {
  CardAction.reverse();
  TextActionFlow("Hello World !!", 1);
};

const CardLeave = () => {
  CardAction.play();
  InitAction();
};

defineExpose({ InitAction, CardLeave, CardEnter});
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
    background-image: url(@/assets/images/bg/svg/bg-star.svg);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: cover;
  }
}
</style>
