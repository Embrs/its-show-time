<template lang="pug">
//- 自我介紹
section#SectionIntroduction
  p SectionIntroduction
  p(v-for="i of 20" :key="i") {{ i }}
  .test-box
  p(v-for="i of 100" :key="i") {{ i }}
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted } from "vue";
const { proxy } = getCurrentInstance()!;
const $gsap = proxy!.$gsap;
onMounted(() => {
  // const el = document.querySelector("main.page-area");
  const scrollTL = $gsap.gsap.timeline({
    scrollTrigger: {
      trigger: "#SectionIntroduction",
      pin: true,
      scrub: true
    },
  });
  scrollTL.to(".test-box",  { yPercent: "50" });
});
</script>

<style lang="scss" scoped>
// 佈局
#SectionIntroduction {
}
// 組件 
#SectionIntroduction {
  .test-box {
    @include size(50vw, 100vh);
    transform: translate(50px, 0);
    background-color: #666;
  }
}
</style>
