<template lang="pug">
//- 會員控制與menu
#CtrlMenu
  CtrlMenuPc.pc-item(:menuList="bgmMenuStore.menuList")
  CtrlMenuMobile.mobile-item(:menuList="bgmMenuStore.menuList")
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import CtrlMenuPc from "@/components/layout/bgm/ctrl-menu/ctrl-menu-pc/index.vue";
import CtrlMenuMobile from "@/components/layout/bgm/ctrl-menu/ctrl-menu-mobile/index.vue";

// menu list -------------------------------------------------------------------------------------------------
import { useBgmMenuStore } from "@/stores/bgm-menu";
const bgmMenuStore = useBgmMenuStore();
// route -------------------------------------------------------------------------------------------------
import { useRoute } from "vue-router";
const $route = useRoute();
//  -------------------------------------------------------------------------------------------------

onMounted(()=> {
  Init();
});

// 頁面初始化
const Init = () => {
  let pageKey = $route.path.replace("/bgm/", "").split("/").pop() || "";
  if (!pageKey) return;
  bgmMenuStore.OpenInit(pageKey);
};
</script>

<style lang="scss" scoped>
#CtrlMenu {
  @include size;
  .pc-item  {
    @include mobile-media {
      display: none !important;
    }
  }
  .mobile-item {
    @include size;
    @include flex;
    @include pc-media {
      display: none !important;
    }
  }
}
</style>
