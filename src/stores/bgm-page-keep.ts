import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { keyMap, SetHash, GetHash, RemoveHash } from "@/plugin/storage";
import { useRouter } from "vue-router";

interface PageInfo {
  key: string,
  path: string,
}

export const useBgmPageKeepStore = defineStore("bgm-page-keep", () => {
  const $route = useRouter();
  const keepPages = ref<PageInfo[]>([]);
  const currentPage = ref<string>("");
  const pageMap = computed(() => keepPages.value.map((i) => i.key));

  // Storage -------------------------------------------------------------------------------------------------
  const SaveStorage = () => {
    SetHash(keyMap.bmgKeepPage, keepPages.value);
    SetHash(keyMap.bgmCurrentPage, currentPage.value);
  };

  const GetStorage = () => {
    keepPages.value = GetHash(keyMap.bmgKeepPage) ?? [];
    currentPage.value = GetHash(keyMap.bgmCurrentPage) ?? "";
  };
  // -------------------------------------------------------------------------------------------------
  // 清除全部 
  const ClearAllSave = () => {
    keepPages.value = [];
    currentPage.value = "";
    RemoveHash(keyMap.bmgKeepPage);
    RemoveHash(keyMap.bgmCurrentPage);
  };

  // 選擇頁面
  const SelectPage = (pageInfo: PageInfo) => {
    if (!pageMap.value.includes(pageInfo.key)) {
      keepPages.value.push(pageInfo);
      $route.push(pageInfo.path);
    }
    currentPage.value = pageInfo.key;
    SaveStorage();
  };

  // 變更頁面列表
  const ChangePages = (pageList: PageInfo[]) => {
    keepPages.value = pageList;
    SaveStorage();
  };

  // 刪除頁面
  const DeletePage = (pageName: string) => {
    // 小於等於 1 不刪除
    if (keepPages.value.length <= 1) return;
    // 刪除位置
    const _delIndex = keepPages.value.findIndex((pageItem) => pageItem.key === pageName);
    if (_delIndex === -1) return;
    // 刪除後的位置
    const _toIndex = (_delIndex - 1) >= 0 ? _delIndex - 1 : _delIndex;
    keepPages.value.splice(_delIndex, 1);
    currentPage.value = keepPages.value[_toIndex].key;
    SaveStorage();
  };
  // init -------------------------------------------------------------------------------------------------
  GetStorage();

  return {
    keepPages,
    currentPage,
    SelectPage,
    ChangePages,
    DeletePage,
    ClearAllSave
  };
});
