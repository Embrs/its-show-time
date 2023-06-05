<template lang="pug">
//- 請填寫功能描述👈
#PaperItem(ref="El_Paper")
  .header-area
    .header-img
    .header-text
  .job-area
  .introduce-area
  .works-area
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from "vue";
const { proxy } = getCurrentInstance()!;
const { gsap } = proxy!.$gsap;

const El_Paper = ref();
let PaperAction: gsap.core.Tween;

onMounted(() => {
  PaperAction = gsap.to(El_Paper.value, { duration: 1.5, xPercent: -140 ,yPercent: "random(-200, 200)", scale: .7, rotation: "random(-20, 20)",  paused: true});
});

const PaperEnter = () => {
  console.log("ee");
  PaperAction.reverse();
};

const PaperLeave = () => {
  console.log("ll");
  PaperAction.play();
};

defineExpose({ PaperEnter, PaperLeave });
</script>

<style lang="scss" scoped>
// 佈局
#PaperItem {
  @include size;
  border: 5px solid #484C74;
  background-color: #fff;
  box-shadow: 0 0 0 0 #aaa;
  color: #000;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  grid-template-areas:
    "header"
    "job"
    "introduce"
    "works" ;
  .border-bottom { border-bottom: 5px solid #484C74; };
  .border-right { border-bottom: 5px solid #484C74; };

  .header-area {
    grid-area: header;
    @extend .border-bottom;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: "head-img head-title";
    .header-img-area {
      grid-area: head-img;
    }
    .header-title-area {
      grid-area: head-title;
    }
  }

  .job-area {
    grid-area: job;
    @extend .border-bottom;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: "job-img job-title";
    .job-img-area {
      grid-area: job-img;
    }
    .job-title-area {
      grid-area: job-title;
    }
  }

  .introduce-area {
    grid-area: introduce;
    @extend .border-bottom;
    grid-template-columns: auto 1fr;
    grid-template-areas: "introduce-img introduce-title";
    .introduce-img-area {
      grid-area: introduce-img;
    }
    .introduce-title-area {
      grid-area: introduce-title;
    }
  }

  .works-area {
    grid-area: works;
    grid-template-columns: auto 1fr;
    grid-template-areas: "works-img works-title";
    .works-img-area {
      grid-area: works-img;
    }
    .works-title-area {
      grid-area: works-title;
    }
  }
}
// 組件
#PaperIem {
}
</style>
