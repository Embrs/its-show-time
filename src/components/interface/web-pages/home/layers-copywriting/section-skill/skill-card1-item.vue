<template lang="pug">
//- 請填寫功能描述👈
#SkillCard1Item(ref="El_SkillCard1Item")
  .card-title(ref="El_SkillTitle") {{"SKILL"}} 
  .skill-list
    .skill-item(ref="El_SkillItem" v-for="skillItem of skillList" :key="skillItem.name")
      img.skill-img(:src="skillItem.logo"  :title="skillItem.name" :alt="skillItem.name")

</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from "vue";
import skillListFn from "./skill-list";
import VanillaTilt from "vanilla-tilt";

const { skillList }  = skillListFn();

const { proxy } = getCurrentInstance()!;
const { gsap, ScrollTrigger } = proxy!.$gsap;

const El_SkillCard1Item = ref();
const El_SkillTitle = ref();
const El_SkillItem = ref();

let SkillTitleAction: gsap.core.Tween;
let SkillItemAction: gsap.core.Tween;

onMounted(() => {
  SkillTitleAction = gsap.fromTo(
    El_SkillTitle.value, 
    { y: -400, opacity: 0, duration: 1, paused: true }, 
    { y: -200, opacity: 1,  duration: 1, paused: true } 
  );
  SkillItemAction = gsap.from(El_SkillItem.value, {
    y: "-50vh",
    x: "random(-400, 400)",
    opacity: 0,
    duration: 0.2,
    delay: 1,
    ease: "Back.easeOut.config(1.7)",
    stagger: 0.05,
    paused: true
  });
  // ---------------------
  ScrollTrigger.create({
    trigger: El_SkillCard1Item.value,
    markers: false,
		//向下滾動進入start點時觸發callback
    onEnter: () => {
      SkillTitleAction.play();
      SkillItemAction.play();
    },
		//向下滾動超過end點時觸發callback
    onLeave: () => {  
      SkillTitleAction.reverse();
      SkillItemAction.reverse();
    }, 
		//向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: () => {
      SkillTitleAction.play();
      SkillItemAction.play();
    },
    onLeaveBack: () => {
      SkillTitleAction.reverse();
      SkillItemAction.reverse();
    }
  });
  // ----------------------
  console.log(El_SkillItem);
  VanillaTilt.init(
    El_SkillItem.value,
    { reverse: true, max: 30, speed: 1000 }
  );
});
</script>

<style lang="scss" scoped>
// 佈局
#SkillCard1Item {
  position: relative;
  min-height: 50vh;
  background: linear-gradient(0deg, #fdff9b00, #14b5b8);
}
// 組件
#SkillCard1Item {
  .card-title {
    position: absolute;
    color: white;
    padding-left: 5vw;
    font-weight: 700;
   
    @include web-media {
      font-size: 200px;
      letter-spacing: 10px;
    }
    @include mobile-media {
      font-size: 80px;
      letter-spacing: 5px;
    }
  }
  .skill-list {
    padding: 100px 5vw 100px 5vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 4vw;
    @include mobile-media {
      padding-top: 0px;
    }
  }
  .skill-item {
    a {
      cursor: default;
    }
  }
  .skill-img {
    @include size(80px);
    filter: drop-shadow(8px 7px 2px rgba(0, 0, 0, 0.3));

  }
}
</style>
