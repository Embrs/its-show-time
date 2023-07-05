import { useRouter } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
export interface menuMap {
  [key: string]: {
    name?: string,
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
  // -------------------------------------------------------------------------------------------------
  // (menu 順序以 menuMap 決定)
  const menuMap: menuMap = {
    home: { icon: "icon-chart-bar" },
    editor: { icon: "icon-doc-text" },
    "ds": { icon: "icon-sliders" },
    "i18n": {icon: "icon-language"},
    "theme-colors": { icon: "icon-eyedropper" },
    "theme-fonts": { icon: "icon-font" },
    "icons": { icon: "icon-star-half-alt" },
    "com": { icon: "icon-beaker" },
    "table": { icon: "icon-list" },
    "dialog": { icon: "icon-chat" },
    "aa": { icon: "icon-bug" },
    "bb": { icon: "icon-bug" },
    "cc": { icon: "icon-bug" },
    "dd": { icon: "icon-bug" },
  };
  // -------------------------------------------------------------------------------------------------
  for (const key in menuMap) {
    menuMap[key].path = bgmPagesObj?.[key]?.path || "";
    menuMap[key].routeName = bgmPagesObj?.[key]?.name?.toString() || "";
  }
  return { menuMap, bgmPages };
};
