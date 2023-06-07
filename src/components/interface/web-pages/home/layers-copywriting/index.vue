<template lang="pug">
//- 文案圖層
#LayersCopywriting

  SectionIntroduction
  SectionSkill
  SectionExperience
  SectionWork
  SectionFooter
</template>

<script setup lang="ts">
import SectionIntroduction from "./section-introduction/index.vue";
import SectionSkill from "./section-skill/index.vue";
import SectionExperience from "./section-experience/index.vue";
import SectionWork from "./section-work/index.vue";
import SectionFooter from "./section-footer/index.vue";
</script>

<style lang="scss" scoped>
// 佈局
#LayersCopywriting {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
}
// 組件
#LayersCopywriting {
}
</style>
