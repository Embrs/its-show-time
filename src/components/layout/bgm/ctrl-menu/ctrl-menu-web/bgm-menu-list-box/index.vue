<template lang="pug">
//- 後台 menu 列表
#BgmMenuListBox(:class="{'is-mini': isMini}")
  BgmMenuList(:menuList="menuList")
</template>

<script setup lang="ts">
import { computed } from "vue";
import BgmMenuList from "./bgm-menu-list.vue";
//  -------------------------------------------------------------------------------------------------
import { useBgmMenuZoom } from "@/stores/ctrl";
const menuStore = useBgmMenuZoom();
const isMini = computed(() => menuStore.isMiniMenu ?? false);
//  -------------------------------------------------------------------------------------------------
import MenuListFn from "./menu-list";
const { menuList } = MenuListFn();
</script>

<style lang="scss" scoped>

#BgmMenuListBox {
  padding: 0 20px;
  transform: padding 0.4s ease;
}
.is-mini {
  padding: 0 0 !important;
}

</style>
