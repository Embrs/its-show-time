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
    "ds": { name: "系統設計", icon: "icon-sliders" },
    "theme-colors": { name: "主題色", icon: "icon-adjust" },
    "theme-fonts": { name: "字型", icon: "icon-font" },
    "icons": { name: "Icon", icon: "icon-star-half-alt" },
    "aa": { name: "aa", icon: "icon-sliders" },
    "bb": { name: "bb", icon: "icon-sliders" },
  };
  for (const key in menuMap) {
    menuMap[key].path = bgmPagesObj?.[key]?.path || "";
    menuMap[key].routeName = bgmPagesObj?.[key]?.name?.toString() || "";
  }
  return { menuMap, bgmPages };
};
