import { ref, computed } from "vue";
import { defineStore } from "pinia";
// 設定 bgm menu 縮放
export const useBgmMenuZoom = defineStore("bgm-menu-zoom", () => {
  const isMiniMenu = ref(false);
  const ReverseZoom = () => {
    isMiniMenu.value = !isMiniMenu.value;
  };
  return { isMiniMenu, ReverseZoom };
});