<template lang="pug">
//- 請填寫功能描述👈
#PaperItem(ref="El_Paper")
  .other-area
  .header-area
    .header-img-area
      img.logo(:src="props.infoData.logo")
    .header-title-area 
      .title {{ props.infoData.title }}
      .sub-title {{ props.infoData.subTitle }}
  .job-area
    .job-label-area {{"JOB TITLE"}}
    .job-content-area {{ props.infoData.job }}
  .introduce-area
    .introduce-content-area {{ props.infoData.intruduce }}
  .project-area
    .project-label-area {{"PROJECT"}}
    .project-content-area
      p(v-for="(textItem, index) of props.infoData.project" :key="index" ) {{ `◆ ${textItem}` }}
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
.border-bottom { border-bottom: 1px solid v-bind("infoData.borderColor"); };
.border-right { border-right: 1px solid v-bind("infoData.borderColor"); };
.label {
  color: v-bind("infoData.bgColor");
  background-color: v-bind("infoData.fontColor");
}
// 佈局
#PaperItem {
  @include size;
  @include font(18px);
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid v-bind("infoData.borderColor");
  box-shadow: 6px 5px 9px 0px #00000042;
  background-color: v-bind("infoData.bgColor");
  color: v-bind("infoData.fontColor");
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  grid-template-columns: 1fr 15px ;
  grid-template-areas:
    "header other"
    "job other"
    "introduce other"
    "project other" ;

  .other-area {
    grid-area: other;
    @extend .label;
  }
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
      padding: 5px 10px;
      background-color: v-bind("infoData.logoBg");
      
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
    @include phone-media {
      @include font(14px);
    }
    .job-label-area {
      grid-area: job-label;
      @extend .border-right;
      @extend .label;
      padding: 10px 20px;
      font-weight: 700;
      display: flex;
      align-items: center;
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
      padding: 20px 30px;
      @include font(20px);
      @include text-break;
      text-align: justify;
      @include phone-media {
        @include font(12px);
      }
    }
  }

  .project-area {
    grid-area: project;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: "project-label project-content";
    @include phone-media {
      @include font(14px);
    }
    .project-label-area {
      grid-area: project-label;
      @extend .border-right;
      @extend .label;
      letter-spacing: 5px;
      padding: 20px 5px;
      writing-mode: vertical-lr;
      font-weight: 700;
    }
    .project-content-area {
      grid-area: project-content;
      padding: 20px;
      @include font(20px);
      display: flex;
      flex-direction: column;
      gap: 10px;
      @include phone-media {
        @include font(12px);
      }
    }
  }
}
// 組件
#PaperItem {
  .logo {
    height: 80px;
    width: 110px;
    object-fit: contain;
    background-color: v-bind("infoData.logoBg");
  }
  .title {
    @include font(36px, 700);
    @include phone-media {
      @include font(20px, 700);
    }
  }
  .sub-title {
    @include font(15px, 700);
    @include font(14px, 700);
  }
}
</style>
