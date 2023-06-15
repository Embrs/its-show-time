// menu 持久化與跳轉
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { keyMap, SetHash, GetHash, RemoveHash } from "@/plugin/storage";
import { useRouter } from "vue-router";
import MenuMapFn from "@/components/vue-fn/bgm/bgm-menu-map";

export const useBgmPageKeepStore = defineStore("bgm-page-keep", () => {
  const { menuMap } = MenuMapFn();
  const $router = useRouter();
  const keepPages = ref<string[]>([]);
  const currentPage = ref<string>("");

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
  const DeleteAll = () => {
    keepPages.value = [];
    currentPage.value = "";
    RemoveHash(keyMap.bmgKeepPage);
    RemoveHash(keyMap.bgmCurrentPage);
  };

  // 選擇頁面
  const SelectPage = (pageKey: string) => {
    if (!pageKey) return;
    if (!keepPages.value.includes(pageKey)) {
      keepPages.value.push(pageKey);
    }
    const path = menuMap[pageKey].path; // TODO 未來優化跳轉路徑為指定路徑
    if (path) $router.push(path);
    currentPage.value = pageKey;
    SaveStorage();
  };

  // 變更頁面列表
  const ChangePages = (pageList: string[]) => {
    keepPages.value = pageList;
    SaveStorage();
  };

  // 刪除頁面
  const DeletePage = (pageKey: string) => {
    if (!pageKey) return;
    // 刪除位置
    const _delIndex = keepPages.value.findIndex((_pageKey) => _pageKey === pageKey);
    if (_delIndex === -1) return;
    keepPages.value.splice(_delIndex, 1);
    // 目前位置 === 刪除位置，目前位置要移動
    if (currentPage.value === pageKey) {
      const _toIndex = (_delIndex - 1) >= 0 ? _delIndex - 1 : _delIndex;
      currentPage.value = keepPages.value[_toIndex];
      const path = menuMap[currentPage.value].path;
      if (path) $router.push(path);
    }
    SaveStorage();
  };

  // keepTab 需要的資訊
  const pageItemList = computed(() => {
    return keepPages.value.map((pageKey) => {
      return {
        ...menuMap[pageKey],
        key: pageKey
      };
    });
  });
  // init -------------------------------------------------------------------------------------------------
  GetStorage();

  return {
    keepPages,
    currentPage,
    pageItemList,
    SelectPage,
    ChangePages,
    DeletePage,
    DeleteAll
  };
});
