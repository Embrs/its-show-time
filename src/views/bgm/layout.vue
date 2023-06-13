<template lang="pug">
//- 請填寫功能描述👈
#BgmLayout
  .ctrl-menu-area
    CtrlMenu
  .page-tab-area page-bar
  .main-page-area
    RouterView(v-slot="{ Component }")
      transition(name="page" mode="out-in")
        //- KeepAlive(:include="")
        component(:is="Component") 
</template>

<script setup lang="ts">
import CtrlMenu from "@/components/layout/bgm/ctrl-menu/index.vue";

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
    background-color: #D5D5D5;
  } 
  .main-page-area {
    grid-area: main-page;
    background-color: #425483;
    overflow: overlay;
  } 
}

// 組件
#BgmLayout {
}
</style>
  