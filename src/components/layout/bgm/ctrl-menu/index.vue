<template lang="pug">
//- 會員控制與menu
#CtrlMenu
  CtrlMenuWeb.web-item(:menuList="menuList")
  CtrlMenuMobile.mobile-item
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import CtrlMenuWeb from "@/components/layout/bgm/ctrl-menu/ctrl-menu-web/index.vue";
import CtrlMenuMobile from "@/components/layout/bgm/ctrl-menu/ctrl-menu-mobile/index.vue";

// -------------------------------------------------------------------------------------------------
import MenuListFn from "./menu-list";
const { menuList, firstPage } = MenuListFn();
// page keep -------------------------------------------------------------------------------------------------
import { useBgmPageKeepStore } from "@/stores/bgm-page-keep";
const bgmPageKeepStore = useBgmPageKeepStore();
// -------------------------------------------------------------------------------------------------
// route -------------------------------------------------------------------------------------------------
import { useRouter } from "vue-router";
const $route = useRouter();
//  -------------------------------------------------------------------------------------------------

onMounted(()=> {
  ToFirstPage();
  InitListOpen();
});

// 前往首頁
const ToFirstPage = () => {
  // keep page 不存在
  if (bgmPageKeepStore.keepPages.length > 0) return;
  if (!firstPage.value) return;

  // TODO
  // $route.push(firstPath.value);
  // bgmPageKeepStore.sele
};

// 初始 menu open 結構
const InitListOpen = () => {
  console.log("rr", $route);
};

</script>

<style lang="scss" scoped>
#CtrlMenu {
  .web-item  {
    @include mobile-media {
      display: none !important;
    }
  }
  .mobile-item {
    @include web-media {
      display: none !important;
    }
  }
}
</style>
