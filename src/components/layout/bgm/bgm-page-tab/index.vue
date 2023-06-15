<template lang="pug">
//- 請填寫功能描述👈
#BgmPageTab
  .tab-item(
    v-for="pageItem of bgmPageKeepStore.pageItemList" :key="pageItem.key"
    :class="{'tab-item-select':pageItem.key === bgmPageKeepStore.currentPage}"
    @click="ClickTab(pageItem.key)"
  )
    .label {{ pageItem.name }}
    .close-btn.icon-cancel(
      v-if="bgmPageKeepStore.pageItemList.length > 1"
      @click.stop="ClickDeleteBtn(pageItem.key)"
    )
</template>

<script setup lang="ts">
import debounce from "lodash/debounce";
// page keep -------------------------------------------------------------------------------------------------
import { useBgmPageKeepStore } from "@/stores/bgm-page-keep";
const bgmPageKeepStore = useBgmPageKeepStore();
// menu list -------------------------------------------------------------------------------------------------
import { useBgmMenuStore } from "@/stores/bgm-menu";
const bgmMenuStore = useBgmMenuStore();

// 點擊刪除
const ClickDeleteBtn = debounce((pageKey: string) => {
  bgmPageKeepStore.DeletePage(pageKey);
}, 400, { leading: true, trailing: false });

// 點擊跳轉
const ClickTab = debounce((pageKey: string) => {
  // 為目前頁面時離開
  if (pageKey === bgmPageKeepStore.currentPage) return;
  bgmPageKeepStore.SelectPage(pageKey);
  bgmMenuStore.OpenInit(pageKey);
}, 400, { leading: true, trailing: false });
</script>

<style lang="scss" scoped>
// 佈局
#BgmPageTab {
  display: flex;
  color: var(--bgmFont200);
  padding: 4px 8px 0 8px;
  gap: 8px;
  overflow-y: overlay;
  width: 100%;
    // background-color: #fff;
}
// 組件
#BgmPageTab {
  .tab-item{
    @include text-line;
    cursor: pointer;
    user-select: none;
    display: flex;
    gap: 5px;
    padding: 1px 8px;
    color: var(--bgmFont100);
    background-color: var(--bgmBg200);
    border: 0.5px solid var(--bgmBorder100);
    border-bottom: 0px;
    border-radius: 4px 4px 0 0;
    opacity: 0.6;
    transition: opacity 0.4s ease, color 0.4s ease, border-color 0.4s ease,;
    &-select {
      color: var(--bgmFont300);
      opacity: 1;
      border: 0.5px solid var(--bgmFont300);
    border-bottom: 0px;
    }
  }
  .close-btn {
    @include btn-click;
  }
}
</style>
