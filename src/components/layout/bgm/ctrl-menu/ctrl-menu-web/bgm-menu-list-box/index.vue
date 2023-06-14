<template lang="pug">
//- 後台 menu 列表
#BgmMenuListBox(:class="{'is-mini':props.isMini}")
  BgmMenuList(:isMini="isMini" :menuList="props.menuList")
</template>

<script setup lang="ts">
import { computed } from "vue";
import BgmMenuList from "./bgm-menu-list.vue";
import type { MenuItem } from "@/components/layout/bgm/ctrl-menu/menu-list";

const props = defineProps({
  isMini: {
    type: Boolean,
    default: false
  },
  menuList: {
    type: Array as () => MenuItem[],
    default: () => ([])
  }
});

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
