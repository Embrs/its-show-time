<template lang="pug">
//- 請填寫功能描述👈
#PaperItem(ref="El_Paper")
  .header-area
    .header-img-area
      img.logo(:src="props.infoData.logo")
    .header-title-area 
      .title {{ props.infoData.title }}
      .sub-title {{ props.infoData.subTitle}}
  .job-area
    .job-label-area
      p {{"JOB TITLE"}}
    .job-content-area
      p {{ props.infoData.job}}
  .introduce-area
    .introduce-content-area {{ props.infoData.intruduce }}
  .works-area
    .works-label-area
      p {{"RESPONSIBILITY"}}
    .works-content-area
      p(v-for="(textItem, index) of props.infoData.works" :key="index" ) {{ `◆ ${textItem}` }}
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from "vue";
import type { JobData } from "./experience-data";

const props = defineProps({
  infoData: {
    type: Object as () => JobData,
    default: () => ({})
  },
});
const borderColor = ref(props.infoData.borderColor);
const bgColor = ref(props.infoData.bgColor);
const fontColor = ref(props.infoData.fontColor);
const logoBg = ref(props.infoData.logoBg);


const { proxy } = getCurrentInstance()!;
const { gsap } = proxy!.$gsap;

const El_Paper = ref();
let PaperAction: gsap.core.Tween;

onMounted(() => {
  PaperAction = gsap.to(El_Paper.value, { duration: 1.5, xPercent: "random(-400, 400)" ,yPercent: "-200", scale: .7, rotation: "random(-20, 20)",  paused: true});
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
.border-bottom { border-bottom: 5px solid v-bind(borderColor); };
.border-right { border-right: 5px solid v-bind(borderColor); };
// 佈局
#PaperItem {
  @include size;
  @include font(18px);
  max-width: 1000px;
  margin: 0 auto;
  border: 5px solid v-bind(borderColor);
  box-shadow: 6px 5px 9px 0px #00000042;
  background-color: v-bind(bgColor);
  color: v-bind(fontColor);
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  grid-template-areas:
    "header"
    "job"
    "introduce"
    "works" ;

  .header-area {
    grid-area: header;
    @extend .border-bottom;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: "head-img head-title";
    .header-img-area {
      grid-area: head-img;
      @include center;
      @extend .border-right;
      padding:  5px;
      background-color: v-bind(logoBg);
      
    }
    .header-title-area {
      grid-area: head-title;
      padding: 10px 20px;
      display: grid;
      align-items: center;
    }
  }

  .job-area {
    grid-area: job;
    @extend .border-bottom;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: "job-label job-content";
    .job-label-area {
      grid-area: job-label;
      @extend .border-right;
      padding: 10px 20px;
      font-weight: 700;
    }
    .job-content-area {
      grid-area: job-content;
      padding: 10px 20px;
    }
  }

  .introduce-area {
    grid-area: introduce;
    @extend .border-bottom;
    .introduce-content-area {
      padding: 20px;
      @include font(20px);
      @include text-break;
    }
  }

  .works-area {
    grid-area: works;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: "works-label works-content";
    .works-label-area {
      grid-area: works-label;
      @extend .border-right;
      padding: 20px 5px;
      writing-mode: vertical-lr;
      font-weight: 700;
      
    }
    .works-content-area {
      grid-area: works-content;
      padding: 20px;
      @include font(20px);
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
// 組件
#PaperItem {
  .logo {
    height: 80px;
    width: 100px;
    object-fit: contain;
    background-color: v-bind(logoBg);
  }
  .title {
    @include font(36px, 700);
  }
  .sub-title {
    @include font(15px, 700);
  }
}
</style>
