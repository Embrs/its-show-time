<template lang="pug">
//- 經歷
section#SectionExperience
  ExperienceTitle
  .experience-box(ref="El_ExperienceBox")
    .box
      PaperItem.p4(
        ref="El_Paper4"
        :infoData="experienceData.hirata"
      )
    .box
      PaperItem.p3(
        ref="El_Paper3"
        :infoData="experienceData.cc"
      )
    .box
      PaperItem.p2(
        ref="El_Paper2"
        :infoData="experienceData.axolotl"
      )
    .box
      PaperItem.p1(
        ref="El_Paper1"
        :infoData="experienceData.tyr"
      )
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted, onBeforeUnmount } from "vue";
import ExperienceTitle from "./experience-title.vue";
import PaperItem from "./paper-item.vue";
import _experienceData from "./experience-data";

const { proxy } = getCurrentInstance()!;
const { gsap } = proxy!.$gsap;

const experienceData = ref(_experienceData);
const El_ExperienceBox = ref();
const El_Paper1 = ref();
const El_Paper2 = ref();
const El_Paper3 = ref();
const El_Paper4 = ref();

let scrollTL: gsap.core.Timeline;
onMounted(() => {
  InitFlow();
});

onBeforeUnmount(() => {
  scrollTL?.kill();
});

const InitFlow = () => {
  const _height = window.innerHeight;
  scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: El_ExperienceBox.value,
      pin: true,
      scrub: true,
      markers: false,
      end: `+=${4*_height}`
    },
  });
  // time line --------------------------------------------
  scrollTL.to(
    El_Paper1.value,
    {
      duration: 1,
      onStart: () => { El_Paper1.value.PaperEnter(); },
      onComplete: () => { El_Paper1.value.PaperLeave(); }
    }
  );
  //-----
  scrollTL.to(
    El_Paper2.value,
    { 
      duration: 1,
      onReverseComplete: () => { El_Paper1.value.PaperEnter(); },
      onStart: () => { El_Paper2.value.PaperEnter(); },
      onComplete: () => { El_Paper2.value.PaperLeave(); }
    }
  );
  //-----
  scrollTL.to(
    El_Paper3.value,
    {
      duration: 1,
      onReverseComplete: () => { El_Paper2.value.PaperEnter(); },
      onStart: () => { El_Paper3.value.PaperEnter(); },
      onComplete: () => { El_Paper3.value.PaperLeave(); }
    }
  );
  //-----
  scrollTL.to(
    El_Paper4.value,
    {
      duration: 1,
      onReverseComplete: () => { El_Paper3.value.PaperEnter(); },
      onStart: () => { El_Paper4.value.PaperEnter(); },
    }
  );
};

</script>

<style lang="scss" scoped>
// 佈局
#SectionExperience {
  position: relative;
  .experience-box {
    position: relative;
    width: 100vw;
    height: 100vh;
    padding: 3vh 3vw;
    .box {
      @include size;
      @include absolute;
      padding: 3vh 6vw 6vh 3vw;
    }
  }
}
// 組件
#SectionExperience {
  // -------------------------------------------------------------------------------------------------
  @for $i from 0 through 3 {
    .p#{$i+1} {
      transform: translate(calc($i * 1vw), calc($i * 1vh)) ;
    }
  }
  // .paper {
  //   @include size;
  //   position: relative;
  //   color: white;
  //   font-size: 2em;
  //   background: linear-gradient(-150deg, transparent 1.5em, rgb(246, 246, 245) 0);
  //   box-shadow: -.2em .2em .3em -.1em rgba(0,0,0,.3);
  //   &::before {
  //     content: '';
  //     @include absolute;
  //     background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.05) 0, rgba(0,0,0,.15)) no-repeat 100% 0;
  //     width: 1.73em;
  //     height: 3em;
  //     transform: translateY(-1.3em) rotate(-30deg);
  //     transform-origin: bottom right;
  //     border-bottom-left-radius: inherit;
  //     box-shadow: -.2em .2em .3em -.1em rgba(0,0,0,.15);
  //   }
  // }
}
</style>
