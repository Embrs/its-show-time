<template lang="pug">
//- 請填寫功能描述👈
#ExperienceTitle
  .title(ref="El_Title") 
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted, onBeforeUnmount } from "vue";
const { proxy } = getCurrentInstance()!;
const { gsap, ScrollTrigger } = proxy!.$gsap;

const El_Title = ref();
let TitleAction: gsap.core.Tween;

onMounted(() => {
  TitleAction = gsap.fromTo(
    El_Title.value,
    { text: "", duration: 1, x: "200px", opacity: 0 },
    { text: "EXPERIENCE", duration: 1, x: "0px", opacity: 1 }
  );
  ScrollTrigger.create({
    trigger: El_Title.value,
    markers: false,
    onEnter: () => {
      TitleAction.play();
    },
    onLeaveBack: () => {
      TitleAction.reverse();
    }
  });
});

onBeforeUnmount(() => {
  TitleAction?.kill();
});
</script>

<style lang="scss" scoped>
// 佈局
#ExperienceTitle {
}
// 組件
#ExperienceTitle {
  .title {
    // padding-left: 5vw;
    text-align: center;
    font-weight: 700;
    color: #484C74;
    letter-spacing: 5px;
    @include pc-media {
      font-size: 100px;
    }
    @include pad-media {
      font-size: 80px;
    }
    @include phone-media {
      font-size: 45px;
      letter-spacing: 5px;
    }
  }
}
</style>
