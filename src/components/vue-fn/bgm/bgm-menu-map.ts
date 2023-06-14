import { useRouter } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
export interface menuMap {
  [key: string]: {
    name: string,
    icon: string,
    path: string
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
  // array to obj
  const pageMap: stringObj = bgmPages.reduce((a, v: any) => ({ ...a, [v.key]: v }), {});
  const MapPath = (key: string) => pageMap?.[key]?.path || "";

  // (menu 順序以 menuMap 決定)
  const menuMap: menuMap = {
    "ds": { name: "系統設計", icon: "icon-sliders", path: MapPath("ds") },
    "theme-colors": { name: "主題色", icon: "icon-adjust", path: MapPath("theme-colors") },
    "theme-fonts": { name: "字型", icon: "icon-font", path: MapPath("theme-fonts") },
    "icons": { name: "Icon", icon: "icon-star-half-alt", path: MapPath("icons") },
    home: { name: "儀表板", icon: "icon-globe", path: MapPath("home") },
    "aa": { name: "aa", icon: "icon-sliders", path: MapPath("aa") },
    "bb": { name: "bb", icon: "icon-sliders", path: MapPath("bb") },
  };
  return { menuMap, bgmPages, pageMap };
};
