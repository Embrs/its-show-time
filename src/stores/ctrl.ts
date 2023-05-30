import { ref, computed } from "vue";
import { defineStore } from "pinia";

// 設定頁面滿屏
export const useFullPageStore = defineStore("ctrl", () => {
  const isFullPage = ref(false);
  const SetFull = (isFull: boolean) => { isFullPage.value = isFull; };
  return { isFullPage, SetFull };
});
