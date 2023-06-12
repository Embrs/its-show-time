<template lang="pug">
//- 請填寫功能描述👈
#BgmLayout
  .ctrl-menu-area
    CtrlMenu
  .page-tab-area page-bar
  .main-content-area content
    span(v-for="i of 100" :key="i") {{ i }}
    p(v-for="i of 100" :key="i") {{ i }}
</template>

<script setup lang="ts">
import CtrlMenu from "@/components/layout/bgm/ctrl-menu/index.vue";
// import UserInfo from "@/components/layout/bgm/user-info/index.vue";
// import PageMenu from "@/components/layout/bgm/page-menu/index.vue";
// import LayoutFooter from "@/components/layout/bgm/layout-footer/index.vue";
// import PageBar from "@/components/layout/bgm/page-bar/index.vue";
// import PageFullBtn from "@/components/layout/bgm/page-full-btn/index.vue";
// // store
// import { useFullPageStore } from "@/stores/ctrl";
// // 頁面延展 Store
// const fullPageStore = useFullPageStore();

</script>

<style lang="scss" scoped>
// 佈局
#BgmLayout {
  @include size;
  max-width: 100vw;
  max-height: 100vh;
  color: white;

  display: grid;
  @include web-media {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "ctrl-menu page-tab"
      "ctrl-menu main-content";
  }
  @include mobile-media {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "page-tab ctrl-menu "
      "main-content main-content";
  }
  .ctrl-menu-area {
    grid-area: ctrl-menu;
    // background-color: #3B445F;
  } 
  .page-tab-area {
    grid-area: page-tab;
    background-color: #D5D5D5;
  } 
  .main-content-area {
    grid-area: main-content;
    background-color: #425483;
    overflow: overlay;
  } 
}

// 組件
#BgmLayout {
}
</style>
  