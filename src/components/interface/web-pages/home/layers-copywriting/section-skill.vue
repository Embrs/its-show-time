<template lang="pug">
//- 技能
section#SectionSkill(ref="El_SectionSkill")
  //- .ss-box
  .card1
    .card1-title {{"SKILL"}} 
    //- .bg
  //- p(v-for="i of 50" :key="i") skill
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from "vue";
const { proxy } = getCurrentInstance()!;
const { gsap, ScrollTrigger } = proxy!.$gsap;
const El_SectionSkill = ref();

onMounted(() => {
  ScrollTrigger.create({
    trigger: "#SectionSkill",
    markers: true,
		//向下滾動進入start點時觸發callback
    onEnter: function () {
      gsap.fromTo(
        ".card1-title",
        { y: -400 , opacity:0,  duration: 1},
        { y: -200 , opacity:1,  duration: 1}
      );
    },
		//向下滾動超過end點時觸發callback
    onLeave: function () {  
      gsap.set(".card1-title", { opacity: 0 });
      // hide(El_SectionSkill.value);
    }, 
		//向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: function () {
      gsap.fromTo(
        ".card1-title",
        { y: -400 , opacity:0,  duration: 1},
        { y: -300 , opacity:1,  duration: 1}
      );
    },
  });
  // const scrollTL = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#SectionSkill", pin: true, scrub: true, markers: true,
  //   }
  // });
  // gsap.from(".card1-title", { y: -200 , opacity:0,  duration: 2});
  
});
</script>

<style lang="scss" scoped>
// 佈局
#SectionSkill {
  position: relative;

}
// 組件
#SectionSkill {
  .ss-box {
    @include size(100px, 100px);
    background-color: #666;
  }
  .card1 {
    position: relative;
    height: 70vh;
    background: linear-gradient(0deg, #fdff9b00, #14b5b8);
    // clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 85%);
  }
  .card1-title {
    position: absolute;
    color: white;
    padding-left: 5vw;
   
    @include web-media {
      font-size: 200px;
      font-weight: 700;
      letter-spacing: 10px;
    }
    @include mobile-media {
      font-size: 80px;
      font-weight: 700;
      letter-spacing: 5px;
    }
  }
}
</style>
