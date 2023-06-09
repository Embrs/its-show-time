<template lang="pug">
//- 自我介紹
main#Home
  LayersBackground
  LayersCopywriting
</template>

<script setup lang="ts">
import LayersBackground from "@/components/interface/web-pages/home/layers-background/index.vue"; // 文案
import LayersCopywriting from "@/components/interface/web-pages/home/layers-copywriting/index.vue"; // 文案
</script>

<style lang="scss" scoped>
#Home {
  position: relative;
  user-select: none;
}
</style>


