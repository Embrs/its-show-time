import { useRouter } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
export interface menuMap {
  [key: string]: {
    name: string,
    icon: string,
    path?: string
    routeName?: string
  };
}
export interface stringObj {
  [key: string]: RouteRecordRaw
}

export default () => {
  const $router = useRouter(); // 路由

  let bgmPages = $router.options.routes.find((item) => item.path === "/bgm")?.children ?? [];
  bgmPages = bgmPages.map((route) => {
    return {
      ...route,
      key: route.path.replace("/bgm/", "").split("/").pop()
    };
  });
  // array to obj // TODO (加到utils) 
  const bgmPagesObj: stringObj = bgmPages.reduce((a, v: any) => ({ ...a, [v.key]: v }), {});

  // (menu 順序以 menuMap 決定)
  const menuMap: menuMap = {
    home: { name: "儀表板", icon: "icon-globe" },
    editor: { name: "富文本", icon: "icon-doc-text-inv" },
    "ds": { name: "系統設計", icon: "icon-sliders" },
    "theme-colors": { name: "主題色", icon: "icon-eyedropper" },
    "theme-fonts": { name: "字型", icon: "icon-font" },
    "icons": { name: "Icon", icon: "icon-star-half-alt" },
    "com": { name: "模組設計", icon: "icon-cubes" },
    "dialog": { name: "彈窗與對話框", icon: "icon-chat" },
    "aa": { name: "aa", icon: "icon-bug" },
    "bb": { name: "bb", icon: "icon-bug" },
  };
  for (const key in menuMap) {
    menuMap[key].path = bgmPagesObj?.[key]?.path || "";
    menuMap[key].routeName = bgmPagesObj?.[key]?.name?.toString() || "";
  }
  return { menuMap, bgmPages };
};
