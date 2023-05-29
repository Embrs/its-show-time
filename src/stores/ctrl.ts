import { ref, computed } from "vue";
import { defineStore } from "pinia";

// 設定頁面滿屏
export const useFullPageStore = defineStore("counter", () => {
  const isFullPage = ref(false);
  const SetFull = (full: boolean) => { isFullPage.value = full; };
  return { isFullPage, SetFull };
});
