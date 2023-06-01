<template lang="pug">
//- 技能
section#SectionSkill
  .card1
    //- .bg
  p(v-for="i of 50" :key="i") skill
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted } from "vue";
const { proxy } = getCurrentInstance()!;
const $gsap = proxy!.$gsap;
onMounted(() => {
  // const el = document.querySelector("main.page-area");
  // const scrollTL = $gsap.gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#SectionSkill",
  //     pin: true,
  //     scrub: true
  //   },
  // });
  // scrollTL.to(".test-box", { opacity: 1 , duration: 1}); // 延長
});
</script>

<style lang="scss" scoped>
// 佈局
#SectionSkill {
  .card1 {
    height: 100vh;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 85%);
    background: linear-gradient(0deg, #FDFF9B, #14b5b8);
    .bg {
      height: 100vh;
      // background-color: #14b5b8;

    }
  }
}
// 組件
#SectionSkill {
}
</style>
