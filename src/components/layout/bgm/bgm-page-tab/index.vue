<template lang="pug">
//- 請填寫功能描述👈
#BgmPageTab
  .tab-item(
    v-for="page of bgmPageKeepStore.keepPages" :key="page"
  ) {{ page }}
</template>

<script setup lang="ts">
// page keep -------------------------------------------------------------------------------------------------
import { useBgmPageKeepStore } from "@/stores/bgm-page-keep";
const bgmPageKeepStore = useBgmPageKeepStore();
// -------------------------------------------------------------------------------------------------

// script
</script>

<style lang="scss" scoped>
// 佈局
#BgmPageTab {
  display: flex;
  color: var(--bgmFont200);
  padding: 4px 8px;
  gap: 8px;
    // background-color: #fff;
}
// 組件
#BgmPageTab {
  .tab-item{
    display: flex;
    gap: 10px;
    padding: 1px 4px;
    color: var(--bgmFont200);
    border: 1px solid #fff;
    border-radius: 4px;
  }
}
</style>
