<template lang="pug">
//- 自我介紹
section#SectionIntroduction
  .level-area.a4.c-4
    .star-item
      img.a6.star-img(src="@/assets/svg/bg-star.svg")
    //- .card-item
  p aaaa
  .level-area.a3.c-3
    .card-item
  .level-area.a2.c-2
    .card-item
  .level-area.a1.c-1
    .card-item
      Card1Item
</template>

<script setup lang="ts">
import Card1Item from "./card1-item.vue";
import { getCurrentInstance, onMounted } from "vue";
const { proxy } = getCurrentInstance()!;
const $gsap = proxy!.$gsap;
// -------------------------------------------------------------------------------------------------
onMounted(() => {
  const scrollTL = $gsap.gsap.timeline({
    scrollTrigger: { trigger: "#SectionIntroduction", pin: true, scrub: true , markers: true},
  });
  // time line
  scrollTL.to(".a1", { xPercent: -140 ,yPercent: 10, scale: .7, rotation: -20, ease: "ease-in", duration: 4});
  scrollTL.to(".a2", { duration: 1});
  scrollTL.to(".a2", { xPercent: -140 ,yPercent: -10, scale: .7, rotation: 20, ease: "ease-in", duration: 4});
  scrollTL.to(".a3", { duration: 1});
  scrollTL.to(".a3", { xPercent: -140, yPercent: 10, scale: .7, rotation: -20, ease: "ease-in", duration: 4});
  scrollTL.to(".a4", { duration: 1});
  scrollTL.fromTo(
    ".a4", 
    {clipPath: "polygon(0% 99%, 100% 0%, 100% 1%, 0% 100%)", duration: 4},
    {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 4},
  );
  // scrollTL.to(".a4", { duration: 4});
  // scrollTL.from(
  //   ".a4", 
  //   { scaleX: 3, scaleY: 0.001,   rotation: -30, duration: 50,  opacity: 1},
  //   // { scale: 1, rotation: 0, duration: 50, opacity: 0}
  // );
  // scrollTL.from(".a6", { opacity: 0 ,delay: 1}, "<");
});
</script>

<style lang="scss" scoped>
// 佈局
#SectionIntroduction {
  position: relative;
  height: 100vh;
  width: 100vw;;
  overflow: hidden;
  .level-area {
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    top: 0;
    left: 0;
  }
}
// 組件 
#SectionIntroduction {
  .card-item {
    @include size;
    // width: 50vw;
    // height: 50vh;
    // overflow: hidden;
    box-shadow: 73px 57px 0px -17px #0000003d;
  }
 
  .c-1 {
    background-color: #F3F7F0;
  }
  .c-2 {
    background-color: #76E5B3;
  }
  .c-3 {
    background-color: #49B2DF;
  }

  .c-4 {
    background-color: #111d2f;
  }
  .star-img {
    @include size;
      object-fit: cover;
  }
  .star-item {
    @include size;
    // background-image: url(@/assets/svg/bg-star.svg);
    // background-repeat: no-repeat;
    // background-position: center center;
    // background-size: cover;
  }
  .star-mask {
    @include size;
    background-image: url(@/assets/svg/bg-star.svg);
  }
}
// -------------------------------------------------------------------------------------------------
@for $i from 0 through 5 {
  .z-#{$i * 10} {
    z-index: #{$i * 10};
  }
}
</style>
