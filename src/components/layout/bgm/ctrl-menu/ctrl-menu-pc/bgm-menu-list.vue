<template lang="pug">
//- menuItem
#BgmMenuList(:class="{'is-sub-list': isSub, 'list-is-mini': props.isMini }" )
  .menu-item(v-for="menuItem of menuList" :key="menuItem.name")
    //-按鈕------------
    .item-btn(
      :class="{'is-sub-btn': isSub, 'is-select': IsCurrentPage(menuItem.path)}" 
      @click="ClickMenuItem(menuItem)"
    )
      .menu-i(:class="menuItem.icon")
      .menu-label {{ $t(`page.${menuItem.key}`) }}
    //-展開------------
    .btn-line(
      v-if="menuItem.children.length > 0"
      :class="{'btn-line-open': menuItem.isOpen}"
    )
    .sub-list(
      v-if="menuItem.children.length > 0"
      :class="{'list-open': menuItem.isOpen}"
    )
      BgmMenuList(
        v-if="menuItem.children"
        :isMini="props.isMini"
        :menuList="menuItem.children"
        :level="level + 1"
        @on-close="EmitClose"
      )
</template>

<script setup lang="ts">
import { computed } from "vue";
import debounce from "lodash/debounce";
import type { MenuItem } from "@/stores/bgm-menu";
// page keep -------------------------------------------------------------------------------------------------
import { useBgmPageKeepStore } from "@/stores/bgm-page-keep";
const bgmPageKeepStore = useBgmPageKeepStore();
// -------------------------------------------------------------------------------------------------
const emit = defineEmits(["on-close"]);
const EmitClose = () => {
  emit("on-close");
};
// -------------------------------------------------------------------------------------------------
const props = defineProps({
  level: { // 第幾層
    type: Number,
    default: 0
  },
  isMini: {
    type: Boolean,
    default: false
  },
  menuList: {
    type: Array as () => MenuItem[],
    default: () => ([])
  }
});
//  -------------------------------------------------------------------------------------------------
// 是子項目
const isSub = computed(() => props.level > 0);
// 點擊 Menu
const ClickMenuItem = debounce((menuItem: MenuItem) => {
  const {key} = menuItem;
  if (menuItem.path) {
    bgmPageKeepStore.SelectPage(key);
    EmitClose();
    return;
  }
  menuItem.isOpen = !menuItem.isOpen;
  // TODO 全關
}, 200, { leading: true, trailing: false });
const IsCurrentPage = (path: string) => {
  const _pageName = path.replace("/bgm/", "").split("/").pop();
  return bgmPageKeepStore.currentPage === _pageName;
};
</script>

<style lang="scss" scoped>
// 佈局
#BgmMenuList {
  width: 100%;
  display: grid;
  gap: 10px;
  padding-top: 10px;
  user-select: none;
  transition: padding-left 0.4s ease;
  .is-sub-list {
    gap: 5px;
    padding-top: 5px;
    padding-left: 20px;
  }
}


.list-is-mini {
  padding-left: 0 !important;
  gap: 0 !important;
  .item-btn {
    gap: 0 !important;
  }
  .menu-item {
    @include column;
  }
  .menu-i {
    font-size: 18px !important;
  }
  .menu-label {
    max-width: 0 !important;
    max-height: 0 !important;
    overflow: hidden;
  }
  .btn-line {
    width: 60% !important;
  }
}

// 組件
#BgmMenuList {
  .is-select {
    color: var(--bgmFont300) !important;
    opacity: 1 !important;
  }
  .item-btn {
    @include flex;
    position: relative;
    color: var(--bgmFont100);
    cursor: pointer;
    gap: 8px;
    opacity: 0.6;
    transition: opacity 0.4s ease, transform 0.1s ease;
    transform-origin: 0 50%;
    &:hover {
      opacity: 1;
    }
    &:before {
      content: " ";
      position: absolute;
      top: 10%;
      left: -5px;
      width: 0%;
      height: 80%;
      background: linear-gradient(-90deg, var(--bgmFont300), transparent);
      opacity: 0;
      border-radius: 4px;
      
      transition: width 0.2s ease, opacity 0.2s ease;
    }
    &:active {
      // transform: scale(0.95);
      &:before {
        opacity: 0.5;
        width: 100%;
    
      }
    }
    .menu-i {
      font-size: 18px;
      z-index: 1;
      min-width: 20px;
    }
    .menu-label {
      font-size: 14px;
      max-width: 400px;
      max-height: 40px;
      transition: max-width 0.2s ease, max-height 0.4s ease;
      z-index: 1;
    }
  }
  .is-sub-btn {
    .menu-i {
      font-size: 18px !important;
    }
    .menu-label {
      font-size: 14px !important;
    }
  }
  .btn-line {
    width: 100%;
    border-top: 1px solid var(--bgmBorder100);
    transition: transform 0.4s ease;
    transform-origin: 0 0;
    transform: scaleX(0);
    &-open {
      transform: scaleX(1);
    }
  }
 
  .sub-list {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.4s ease, opacity 0.4s ease;
  }
  .list-open {
    max-height: 1000px;
    opacity: 1;
  }
}
</style>
