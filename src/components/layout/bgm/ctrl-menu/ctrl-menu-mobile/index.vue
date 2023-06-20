<template lang="pug">
//- 請填寫功能描述👈
#CtrlMenuMobile
  .menu-btn(@click="OepnMenu")
    .icon-menu
  CtrlMenuDrawer(ref="El_CtrlMenuDrawer" :menuList="props.menuList")
</template>

<script setup lang="ts">
import { ref } from "vue";
import CtrlMenuDrawer from "./ctrl-menu-drawer.vue";
import type { MenuItem } from "@/stores/bgm-menu";

const El_CtrlMenuDrawer = ref();
const props = defineProps({
  menuList: {
    type: Array as () => MenuItem[],
    default: () => ([])
  }
});
const OepnMenu = () => {
  El_CtrlMenuDrawer.value.OpenDrawer();
};
</script>

<style lang="scss" scoped>
#CtrlMenuMobile {
  background-color: var(--bgmBg200);
  .menu-btn {
    @include size(50px, 30px);
    @include center;
    @include btn-click;
    color: var(--bgmFont200);
    font-size: 20px;
  }
}

</style>
