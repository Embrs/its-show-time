<template lang="pug">
//- 自我介紹
#SectionSelfInfo
  p SectionSelfInfo
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
      trigger: "#Home",
      pin: true,
      scrub: true
    },
  });
  scrollTL.to(".test-box",  { yPercent: "100" });
});
</script>

<style lang="scss" scoped>
// 佈局
#SectionSelfInfo {
}
// 組件
#SectionSelfInfo {
  .test-box {
    @include size(50vw, 80vh);
    background-color: #666;
  }
}
</style>
