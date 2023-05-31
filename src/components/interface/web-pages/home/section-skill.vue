<template lang="pug">
//- 技能
section#SectionSkill
  p SectionSkill
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
      trigger: "#SectionSkill",
      pin: true,
      scrub: true
    },
  });
  scrollTL.to(".test-box", { opacity: 1 , duration: 1}); // 延長
});
</script>

<style lang="scss" scoped>
// 佈局
#SectionSkill {
}
// 組件
#SectionSkill {
  .test-box {
    @include size(50vw, 100vh);
    transform: translate(50px, -100vh);
    background-color: #666;
  }
}
</style>
