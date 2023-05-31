<template lang="pug">
//- 自我介紹
main#Home
  SectionSelfInfo
  SectionSkill
  SectionWork
  SectionExperience
</template>

<script setup lang="ts">
import SectionSelfInfo from "@/components/interface/web-pages/home/section-self-info.vue";
import SectionSkill from "@/components/interface/web-pages/home/section-skill.vue";
import SectionExperience from "@/components/interface/web-pages/home/section-experience.vue";
import SectionWork from "@/components/interface/web-pages/home/section-work.vue";
</script>


