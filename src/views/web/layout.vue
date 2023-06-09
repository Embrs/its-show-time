<template lang="pug">
//- 佈局
#Layout
  RouterView
  //- WebMenuBtn.menu-item
</template>

<script setup lang="ts">
import WebMenuBtn from "@/components/layout/web/web-menu-btn/index.vue";
</script>

<style lang="scss" scoped>
// 佈局
#Layout {
  position: relative;
}
// 組件
#Layout {
  .menu-item {
    @include fixed("top-right", 30px);
    // position: fixed;
    // top: 30px;
    // right: 30px;
    z-index: 1;
  }
}
</style>
