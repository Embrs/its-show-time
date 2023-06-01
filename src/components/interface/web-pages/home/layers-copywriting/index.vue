<template lang="pug">
//- 文案圖層
#LayersCopywriting
  SectionIntroduction
  SectionSkill
  SectionExperience
  SectionWork
</template>

<script setup lang="ts">
import SectionIntroduction from "./section-introduction.vue";
import SectionSkill from "./section-skill.vue";
import SectionExperience from "./section-experience.vue";
import SectionWork from "./section-work.vue";
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
