<template lang="pug">
//- 請填寫功能描述👈
#PageFullBtn(@click="ClickFullPageIcon")
  component(:is="fullPageIcon")
</template>

<script setup lang="ts">
import { computed } from "vue";
import debounce from "lodash/debounce";
// icon
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons-vue";
import { useFullPageStore } from "@/stores/ctrl";
// 頁面延展 Store
const fullPageStore = useFullPageStore();
// 頁面延展 icon
const fullPageIcon = computed(()=> {
  if (fullPageStore.isFullPage === true) return FullscreenExitOutlined;
  return FullscreenOutlined;
});
// 點擊頁面延展 icon
const ClickFullPageIcon = debounce(() => {
  fullPageStore.SetFull(!fullPageStore.isFullPage);
}, 200, { leading: true, trailing: false });
</script>

<style lang="scss" scoped>
#PageFullBtn {
  @include center;
  @include size(30px);
  @include btn-click;

  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 1;

  font-size: 24px;;
  color: white;
  background-color: #666;
  
  opacity: 0.2;
  transition: opacity 0.4s ease;
  &:hover { opacity: 0.8; }
}
</style>
