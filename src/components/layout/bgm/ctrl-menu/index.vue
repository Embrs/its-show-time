<template lang="pug">
//- 會員控制與menu
#CtrlMenu
  CtrlMenuWeb.web-item(:menuList="bgmMenuStore.menuList")
  CtrlMenuMobile.mobile-item
</template>

<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import CtrlMenuWeb from "@/components/layout/bgm/ctrl-menu/ctrl-menu-web/index.vue";
import CtrlMenuMobile from "@/components/layout/bgm/ctrl-menu/ctrl-menu-mobile/index.vue";

// menu list -------------------------------------------------------------------------------------------------
import { useBgmMenuStore } from "@/stores/bgm-menu";
const bgmMenuStore = useBgmMenuStore();
// page keep -------------------------------------------------------------------------------------------------
import { useBgmPageKeepStore } from "@/stores/bgm-page-keep";
const bgmPageKeepStore = useBgmPageKeepStore();
// route -------------------------------------------------------------------------------------------------
import { useRoute } from "vue-router";
const $route = useRoute();
//  -------------------------------------------------------------------------------------------------

onMounted(()=> {
  Init();
});

// 頁面初始化
const Init = () => {
  let page = $route.path.replace("/bgm/", "").split("/").pop() || "";
  if ($route.path === "/bgm") {
    page = bgmMenuStore?.firstPage?.key || page;
  }
  bgmPageKeepStore.SelectPage(page);
  bgmMenuStore.OpenInit(page);
};

// 初始 menu open 結構
const InitListOpen = () => {
  //
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
