<template lang="pug">
//- 請填寫功能描述👈
#SkillCard1Item(ref="El_SkillCard1Item")
  .card-title(ref="El_SkillTitle") {{"SKILL"}} 
  .skill-list
    .skill-item(ref="El_SkillItem" v-for="skillItem of skillList" :key="skillItem.name")
      img.skill-img(:src="skillItem.logo"  :title="skillItem.name" :alt="skillItem.name")

</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted, vShow } from "vue";
import skillListFn from "./skill-list";
import VanillaTilt from "vanilla-tilt";

const { skillList }  = skillListFn();

const { proxy } = getCurrentInstance()!;
const { gsap, ScrollTrigger } = proxy!.$gsap;


const El_SkillCard1Item = ref();
const El_SkillTitle = ref();
const El_SkillItem = ref();


let SkillTitleAction: gsap.core.Tween;
let SkillItemActions: gsap.core.Tween[];
onMounted(() => {
  SkillTitleAction = gsap.fromTo(
    El_SkillTitle.value, 
    { y: -400, opacity: 0, duration: 1 }, 
    { y: -200, opacity: 1,  duration: 1, paused: true } 
  );
  let _delay :number = 1;
  const SkillItemActions = El_SkillItem.value.map((skillEl: Element) => {
    _delay += 0.2;
    return gsap.from(skillEl, {
      y: "-50vh", opacity:0 ,duration: 1, delay: _delay, ease: "Bounce.easeOut",
      scrollTrigger: {  trigger: El_SkillCard1Item.value  }
    });
  });
  // ---------------------
  ScrollTrigger.create({
    trigger: El_SkillCard1Item.value,
    markers: true,
		//向下滾動進入start點時觸發callback
    onEnter: () => {
      console.log("enter");
      SkillTitleAction.play();
      SkillItemActions.forEach((action: gsap.core.Tween) => { action.play(); });
    },
		//向下滾動超過end點時觸發callback
    onLeave: () => {  
      console.log("leave");
      SkillTitleAction.reverse();
      SkillItemActions.forEach((action: gsap.core.Tween) => { action.reverse(); });
    }, 
		//向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: () => {
      console.log("enter back");
      SkillTitleAction.play();
      SkillItemActions.forEach((action: gsap.core.Tween) => { action.play(); });
    },
    onLeaveBack: () => {
      console.log("leave back");
      SkillTitleAction.reverse();
      SkillItemActions.forEach((action: gsap.core.Tween) => { action.reverse(); });
    }
  });
  // ----------------------
  // let i = 1;
  // for (const skillEl of El_SkillItem.value) {
  //   i+=0.2;
  //   gsap.from(skillEl, {
  //     y: "-50vh", opacity:0 ,duration: 1, delay: i, ease: "Bounce.easeOut",
  //     scrollTrigger: {  trigger: El_SkillCard1Item.value  }
  //   });

  // }
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
  .skill-list {
    padding: 100px 5vw 100px 5vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 3vw;
    @include mobile-media {
      padding-top: 0px;
    }
  }
  .skill-img {
    @include size(100px);
    filter: drop-shadow(8px 7px 2px rgba(0, 0, 0, 0.3));

  }
}
</style>
