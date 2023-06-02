<template lang="pug">
//- 請填寫功能描述👈
#Card2Item
  .mask-text
    p.en-name {{"HARRY TSOU"}}
    p.name {{ "鄒豐懋" }}
    p.job {{"FRONT-END ENGINEER"}}
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance()!;
const { gsap } = proxy!.$gsap;
// -------------------------------------------------------------------------------------------------
const InitAction = () => {
  gsap.fromTo("#Card2Item > * > .en-name", {x: "-100vw", opacity: 0 }, {x: "0", duration:0.8, opacity: 1 });
  gsap.fromTo("#Card2Item > * > .name", {y: "100vh", opacity: 0 }, {y: "0", duration: 1.2, opacity: 1 });
  gsap.fromTo("#Card2Item > * > .job", {x: "100vw", opacity: 0 }, {x: "0", duration: 1.4, opacity: 1 });
};
defineExpose({InitAction});
</script>

<style lang="scss" scoped>
// 佈局
#Card2Item {
  background-color: #76E5B3;
  color: #FFFFFF;
  text-shadow: 10px 9px 2px #00000036;
  @include center;
  @include web-media {
    @include flex;
    padding: 40px;
  }
  @include mobile-media {
    padding: 20px;
  }
  // @include size;
  // @include center;
  // font-weight: 700;
  // @include web-media {
  //   font-size: 170px;
  // }
  // @include mobile-media {
  //   font-size: 80px;
  // }
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
  }
  .name {
    color: #FFFFFF;
    font-size: 40px;
    letter-spacing: 20px;
    padding-left: 8px;
    opacity: 0;
  }
  .job {
    color: #fff;
    text-align: right;
    font-size: 60px;
    letter-spacing: 10px;
    padding-right: 5px;
    opacity: 0;
  }
  .mask-text {
    // background: url(@/assets/svg/bg-star.svg);
    // -webkit-text-fill-color: transparent;
    text-shadow: 10px 9px 2px #00000036;
    // -webkit-background-clip: text;
    // // background-clip: text;
    // background-size: cover;
  }
}
</style>
