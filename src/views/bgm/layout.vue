<template lang="pug">
//- 請填寫功能描述👈
#BgmLayout
  .ctrl-menu-area
    CtrlMenu
  .page-tab-area
    BgmPageTab
  .main-page-area
    RouterView(v-slot="{ Component }")
      transition(name="bgm-page" mode="out-in")
        KeepAlive(:include="bgmPageKeepStore.keepPages")
          component(:is="Component") 
</template>

<script setup lang="ts">
import CtrlMenu from "@/components/layout/bgm/ctrl-menu/index.vue";
import BgmPageTab from "@/components/layout/bgm/bgm-page-tab/index.vue";
// page keep -------------------------------------------------------------------------------------------------
import { useBgmPageKeepStore } from "@/stores/bgm-page-keep";
const bgmPageKeepStore = useBgmPageKeepStore();



</script>

<style lang="scss" scoped>
#BgmLayout {
  @include size;
  max-width: 100vw;
  max-height: 100vh;
  background-color: var(--bgmBg100);
  display: grid;
  @include pc-media {
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
    max-width: 100vw;
    overflow-x: overlay;
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      margin: 5px;
    }
  } 
  .main-page-area {
    grid-area: main-page;
    overflow: overlay;
    border-top: 1px solid var(--bgmBorder100);
  } 
}

.bgm-page-enter-active,
.bgm-page-leave-active {
  transition: all 0.4s ease;
}
.bgm-page-enter-from,
.bgm-page-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
</style>
  