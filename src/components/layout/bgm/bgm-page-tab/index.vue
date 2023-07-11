<template lang="pug">
//- 請填寫功能描述👈
#BgmPageTab
  Container(
    orientation="horizontal"
    behaviour="contain"
    :lock-axis="'x'"
    @drop="DropEvent"
  
  )
    Draggable.dnd(v-for="pageItem of bgmPageKeepStore.pageItemList" :key="pageItem.key")
      .tab-item(
        :class="{'tab-item-select':pageItem.key === bgmPageKeepStore.currentPage}"
        @click="ClickTab(pageItem.key)"
      )
        .label {{ $t(`page.${pageItem.key}`) }}
        .close-btn.icon-cancel(
          v-if="bgmPageKeepStore.pageItemList.length > 1"
          @click.stop="ClickDeleteBtn(pageItem.key)"
        )
</template>

<script setup lang="ts">
import { Container, Draggable } from "vue3-smooth-dnd";
import debounce from "lodash/debounce";
// page keep -------------------------------------------------------------------------------------------------
import { useBgmPageKeepStore } from "@/stores/bgm-page-keep";
const bgmPageKeepStore = useBgmPageKeepStore();
// menu list -------------------------------------------------------------------------------------------------
import { useBgmMenuStore } from "@/stores/bgm-menu";
const bgmMenuStore = useBgmMenuStore();

// 點擊刪除
const ClickDeleteBtn = debounce((pageKey: string) => {;
  bgmPageKeepStore.DeletePage(pageKey);
}, 400, { leading: true, trailing: false });

// 點擊跳轉
const ClickTab = debounce((pageKey: string) => {
  // 為目前頁面時離開
  if (pageKey === bgmPageKeepStore.currentPage) return;
  bgmPageKeepStore.SelectPage(pageKey);
  bgmMenuStore.OpenInit(pageKey);
}, 400, { leading: true, trailing: false });
// -------------------------------------------------------------------------------------------------
// 拖動
const DropEvent = (dropRes:any) => {
  const _arr = bgmPageKeepStore.pageItemList.map((i) => i.key);
  const _resArr = ChangeDragArray(_arr, dropRes);
  bgmPageKeepStore.ChangePages(_resArr);
};

// 交換拖移陣列
const ChangeDragArray = (_arr: any, dropRes: any) => {
  const { removedIndex, addedIndex } = dropRes;
  const result = [..._arr];
  let moveItem = _arr[removedIndex];
  if (removedIndex !== null) {
    moveItem = result.splice(removedIndex, 1)[0];
  }
  if (addedIndex !== null) {
    result.splice(addedIndex, 0, moveItem);
  }
  return result;
};
</script>

<style lang="scss" scoped>
// 佈局
#BgmPageTab {
  display: flex;
  color: var(--bgmFont200);
  padding: 8px 8px 0 8px;
  overflow-y: overlay;
  width: 100%;
  background-color: var(--bgmBg200);
    // background-color: #fff;
}
// 組件
#BgmPageTab {
  .tab-item {
    @include text-line;
    // cursor: pointer;
    cursor: grab;
    user-select: none;
    display: flex;
    align-items: center;
    height: 30px;
    gap: 5px;
    padding: 1px 10px;
    margin-right: 8px;;
    color: var(--bgmFont100);
    background-color: var(--bgmBg100);
    border: 0.5px solid var(--bgmBorder100);
    border-bottom: 0px;
    border-radius: 4px 4px 0 0;
    opacity: 0.8;
    transition: opacity 0.4s ease, color 0.4s ease, border-color 0.4s ease,;
    &-select {
      color: var(--bgmFont300);
      opacity: 1;
      border: 0.5px solid var(--bgmFont300);
      border-bottom: 0px;
    }
     &:active {
      cursor: grabbing;
    }
  }
  .close-btn {
    @include btn-click;
  }
}
</style>
