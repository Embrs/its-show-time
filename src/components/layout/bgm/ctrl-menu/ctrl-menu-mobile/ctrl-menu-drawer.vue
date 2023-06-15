<template lang="pug">
//- 請填寫功能描述👈
teleport(to="#Layout")
  transition(name="opacity")
    #CtrlMenuDrawer(v-show="visible")
      .drawer-mask(v-show="visible" @click="OnClose")
      transition(name="menu-drawer")
        .menu-box(v-show="visible")
          CtrlMenuWeb(:menuList="props.menuList" @on-close="OnClose" isMobileType)
</template>

<script setup lang="ts">
import { ref } from "vue";
import CtrlMenuWeb from "@/components/layout/bgm/ctrl-menu/ctrl-menu-web/index.vue";

import type { MenuItem } from "@/stores/bgm-menu";
const props = defineProps({
  menuList: {
    type: Array as () => MenuItem[],
    default: () => ([])
  }
});
const visible = ref(false);

const OnClose = () => {
  console.log("close");
  visible.value = false;
};
const OpenDrawer = () => {
  visible.value = true;
};//  -------------------------------------------------------------------------------------------------
defineExpose({ OpenDrawer });
</script>

<style lang="scss" scoped>
// 佈局
#CtrlMenuDrawer {
  @include fixed("fill");
  z-index: 1000;
}
// 組件
#CtrlMenuDrawer {
  .drawer-mask {
    @include fixed;
    @include size;
    backdrop-filter: blur(1px);
    background-color: rgb(0 0 0 / 24%);
  }
  .menu-box {
    @include absolute("top-right");
    height: 100%;
  }
}

.menu-drawer-enter-active,
.menu-drawer-leave-active {
  transition: transform .4s ease, border-radius .4s ease;
}
.menu-drawer-enter-from,
.menu-drawer-leave-to {
  transform: translateX(500px);
  border-radius: 100% 0 0 100% !important;

}
</style>
