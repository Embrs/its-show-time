<template lang="pug">
//- 請填寫功能描述👈
#BgmLayout
  .ctrl-menu-area
    CtrlMenu
  .page-tab-area
    BgmPageTab
  .main-page-area
    RouterView(v-slot="{ Component }")
      transition(name="page" mode="out-in")
        //- KeepAlive(:include="")
        component(:is="Component") 
</template>

<script setup lang="ts">
import CtrlMenu from "@/components/layout/bgm/ctrl-menu/index.vue";
import BgmPageTab from "@/components/layout/bgm/bgm-page-tab/index.vue";



</script>

<style lang="scss" scoped>
// 佈局
#BgmLayout {
  @include size;
  max-width: 100vw;
  max-height: 100vh;
  background-color: var(--bgmBg100);
  display: grid;
  @include web-media {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "ctrl-menu page-tab"
      "ctrl-menu main-page";
  }
  @include mobile-media {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "page-tab ctrl-menu "
      "main-page main-page";
  }
  .ctrl-menu-area {
    grid-area: ctrl-menu;
  } 
  .page-tab-area {
    grid-area: page-tab;
  } 
  .main-page-area {
    grid-area: main-page;
    overflow: overlay;
    border-top: 1px solid var(--bgmBorder100);
  } 
}

// 組件
#BgmLayout {
}
</style>
  