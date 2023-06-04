<template lang="pug">
//- 技能
section#SectionSkill(ref="El_SectionSkill")
  .card1
    .card1-title(ref="El_SkillTitle") {{"SKILL"}} 
    //- .bg
  //- p(v-for="i of 50" :key="i") skill
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from "vue";
const { proxy } = getCurrentInstance()!;
const { gsap, ScrollTrigger } = proxy!.$gsap;

const El_SectionSkill = ref();
const El_SkillTitle = ref();

let SkillTitleAction: gsap.core.Tween;
onMounted(() => {
  SkillTitleAction = gsap.fromTo(
    El_SkillTitle.value, 
    { y: -400 , opacity: 2, duration: 1 }, 
    { y: -200 , opacity: 2,  duration: 1, paused: true } 
  );

  ScrollTrigger.create({
    trigger: El_SectionSkill.value,
    markers: true,
		//向下滾動進入start點時觸發callback
    onEnter: function () {
      SkillTitleAction.play();
    },
		//向下滾動超過end點時觸發callback
    onLeave: function () {  
      SkillTitleAction.reverse();
    }, 
		//向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: function () {
      SkillTitleAction.play();
    },
  });
  
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
