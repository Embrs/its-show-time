<template lang="pug">
//- menuItem
#BgmMenuList( :class="{'is-sub-list': isSub, 'list-is-mini': isMini }" )
  .menu-item(v-for="menuItem of menuList" :key="menuItem.name")
    .item-btn(
      :class="{'is-sub-btn': isSub}" 
      @click="ClickMenuItem(menuItem)"
    )
      .menu-i(:class="menuItem.icon")
      .menu-label {{ menuItem.name }}
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
        :level="level + 1"
        :menuList="menuItem.children"
      )
</template>

<script setup lang="ts">
import { computed } from "vue";
import debounce from "lodash/debounce";
import type { MenuItem } from "./menu-list";
//  -------------------------------------------------------------------------------------------------
import { useBgmMenuZoom } from "@/stores/ctrl";
const menuStore = useBgmMenuZoom();
const isMini = computed(() => menuStore.isMiniMenu ?? false);
//  -------------------------------------------------------------------------------------------------
import { useRouter } from "vue-router";
const $route = useRouter();
//  -------------------------------------------------------------------------------------------------
const props = defineProps({
  level: { // 第幾層
    type: Number,
    default: 0
  },
  menuList: {
    type: Array as () => MenuItem[],
    default: () => ([])
  }
});
// 目前階層
const currentLevel = computed(() => props.level);
// 是子項目
const isSub =  computed(() => props.level > 0);
// 點擊 Menu
const ClickMenuItem = debounce((menuItem: MenuItem) => {
  if (menuItem.path) {
    $route.push(menuItem.path);
    return;
  }
  menuItem.isOpen = !menuItem.isOpen;
  // TODO 全關
}, 200, { leading: true, trailing: false });
</script>

<style lang="scss" scoped>
// 佈局
#BgmMenuList {
  width: 100%;
  display: grid;
  gap: 10px;
  padding-top: 10px;
  user-select: none;
  // color: #C8FDF8;
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
    font-size: 20px !important;
  }
  .menu-label {
    max-width: 0 !important;
    max-height: 0 !important;
    overflow: hidden;
  }
  .btn-line {
    margin: 10px 0;
    width: 60% !important;
  }
}

// 組件
#BgmMenuList {
  .item-btn {
    @include flex;
    color: #C8FDF8;
    cursor: pointer;
    gap: 6px;
    opacity: 0.6;
    transition: opacity 0.4s ease;;
    &:hover {
      opacity: 1;
    }
    .menu-i {
      font-size: 20px;
    }
    .menu-label {
      font-size: 16px;
      max-width: 400px;
      max-height: 40px;
      transition: max-width 0.2s ease, max-height 0.2s ease;
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
    border-top: 1px solid #C8FDF8;
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
