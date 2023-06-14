import { ref } from "vue";
import { defineStore } from "pinia";
import { keyMap, SetHash, GetHash, RemoveHash } from "@/plugin/storage";
import { useRouter } from "vue-router";
import MenuMapFn from "@/components/vue-fn/bgm/bgm-menu-map";


export const useBgmPageKeepStore = defineStore("bgm-page-keep", () => {
  const { pageMap } = MenuMapFn();
  const $route = useRouter();
  const keepPages = ref<string[]>([]);
  const currentPage = ref<string>("");
  // const pageMap = computed(() => keepPages.value.map((page) => page));

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
  const SelectPage = (pageName: string) => {
    if (!keepPages.value.includes(pageName)) {
      keepPages.value.push(pageName);
    }
    const path = pageMap[pageName];
    if (path) $route.push(path);
    currentPage.value = pageName;
    SaveStorage();
  };

  // 變更頁面列表
  const ChangePages = (pageList: string[]) => {
    keepPages.value = pageList;
    SaveStorage();
  };

  // 刪除頁面
  const DeletePage = (pageName: string) => {
    // 小於等於 1 不刪除
    if (keepPages.value.length <= 1) return;
    // 刪除位置
    const _delIndex = keepPages.value.findIndex((_pageName) => _pageName === pageName);
    if (_delIndex === -1) return;
    // 刪除後的位置
    const _toIndex = (_delIndex - 1) >= 0 ? _delIndex - 1 : _delIndex;
    keepPages.value.splice(_delIndex, 1);
    currentPage.value = keepPages.value[_toIndex];
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
