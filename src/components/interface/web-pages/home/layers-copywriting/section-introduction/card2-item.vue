<template lang="pug">
//- 請填寫功能描述👈
#Card2Item
  .text-area
    p.en-name {{"HARRY TSOU"}}
    p.name {{ "鄒豐懋" }}
    p.job {{"FRONT-END ENGINEER"}}
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance()!;
const { gsap } = proxy!.$gsap;

const StartAction = () => {
  gsap.fromTo("#Card2Item > * > .en-name", {x: "-100vw", opacity: 0, duration: 0 }, {x: "0", opacity: 1, duration: 1 });
  gsap.fromTo("#Card2Item > * > .name", {y: "100vh", opacity: 0, duration: 0 }, {y: "0", opacity: 1, duration: 1 });
  gsap.fromTo("#Card2Item > * > .job", {x: "100vw", opacity: 0, duration: 0 }, {x: "0", opacity: 1, duration: 1 });
};

const InitAction = () => {
  gsap.to("#Card2Item > * > .en-name", {opacity: 0});
  gsap.to("#Card2Item > * > .name", {opacity: 0});
  gsap.to("#Card2Item > * > .job", {opacity: 0});
};

const CardLeave = () => {
  gsap.to("#Card2Item", { duration: 1, xPercent: -140 ,yPercent: -10, scale: .7, rotation: 20, ease: "expo" });
  InitAction();
};

const CardBack = () => {
  gsap.to("#Card2Item", { duration: 1, xPercent: 0 ,yPercent: 0, scale: 1, rotation: 0, ease: "expo" });
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
    opacity: 0;
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
    opacity: 0;
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
    opacity: 0;
    @include phone-media {
      padding-top: 40px;
      font-size: 30px;
      line-height: 40px;
    }
  }
}
</style>
