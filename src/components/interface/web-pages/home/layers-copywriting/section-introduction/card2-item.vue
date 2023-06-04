<template lang="pug">
//- 請填寫功能描述👈
#Card2Item(ref="El_Card")
  .text-area
    p.en-name(ref="El_EnName") {{"HARRY TSOU"}}
    p.name(ref="El_Name") {{ "鄒豐懋" }}
    p.job(ref="El_Job") {{"FRONT-END ENGINEER"}}
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from "vue";
const { proxy } = getCurrentInstance()!;
const { gsap } = proxy!.$gsap;

const El_Card = ref();
const El_EnName = ref();
const El_Name = ref();
const El_Job  = ref();

let CardAction: gsap.core.Tween;
let EnNameAction: gsap.core.Tween;
let NameAction: gsap.core.Tween;
let JobAction: gsap.core.Tween;
onMounted( () => {
  CardAction = gsap.to(El_Card.value, { duration: 1, xPercent: -140 ,yPercent: -10, scale: .7, rotation: 20,  paused: true});
  EnNameAction = gsap.from(El_EnName.value, { x: "-100vw", opacity: 0, duration: 2, paused: true });
  NameAction = gsap.from(El_Name.value, { y: "100vh", opacity: 0, duration: 2, paused: true });
  JobAction = gsap.from(El_Job.value, { x: "100vw", opacity: 0, duration: 2, paused: true });
});


const StartAction = () => {
  EnNameAction.play();
  NameAction.play();
  JobAction.play();
};

const InitAction = () => {
  EnNameAction.reverse();
  NameAction.reverse();
  JobAction.reverse();
};

const CardLeave = () => {
  CardAction.play();
  InitAction();
};

const CardBack = () => {
  CardAction.reverse();
  StartAction();
};

defineExpose({ StartAction, InitAction, CardLeave, CardBack });
</script>

<style lang="scss" scoped>
// 佈局
#Card2Item {
  background-color: #76E5B3;
  color: #FFFFFF;
  text-shadow: 10px 9px 2px #00000036;
  @include center;
  @include web-media {
    padding: 40px;
  }
  @include mobile-media {
    padding: 20px;
  }
}
// 組件
#Card2Item {
  .en-name {
    color: #fff;
    font-size: 160px;
    line-height: 127px;
    font-weight: 700px;
    letter-spacing: 14px;
    @include phone-media {
      font-size: 90px;
      line-height: 77px;
    }
  }
  .name {
    color: #FFFFFF;
    font-size: 40px;
    letter-spacing: 20px;
    padding-left: 8px;
    @include phone-media {
      font-size: 30px;
    }
  }
  .job {
    color: #fff;
    text-align: right;
    font-size: 40px;
    letter-spacing: 10px;
    padding-right: 5px;
    @include phone-media {
      padding-top: 40px;
      font-size: 30px;
      line-height: 40px;
    }
  }
}
</style>
