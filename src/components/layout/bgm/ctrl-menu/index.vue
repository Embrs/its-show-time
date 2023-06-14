<template lang="pug">
//- 會員控制與menu
#CtrlMenu
  CtrlMenuWeb.web-item(
    :isMini="isMini"
    :menuList="menuList"
    @on-reverse-zoom="OnReverseZoom"
  )
  CtrlMenuMobile.mobile-item
</template>

<script setup lang="ts">
import { computed } from "vue";
import CtrlMenuWeb from "@/components/layout/bgm/ctrl-menu/ctrl-menu-web/index.vue";
import CtrlMenuMobile from "@/components/layout/bgm/ctrl-menu/ctrl-menu-mobile/index.vue";
// -------------------------------------------------------------------------------------------------
import { useBgmMenuZoom } from "@/stores/ctrl";
const menuStore = useBgmMenuZoom();
const isMini = computed(() => menuStore.isMiniMenu ?? false);
const OnReverseZoom = () => {
  menuStore.ReverseZoom();
};
// -------------------------------------------------------------------------------------------------
import MenuListFn from "./menu-list";
const { menuList } = MenuListFn();

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
