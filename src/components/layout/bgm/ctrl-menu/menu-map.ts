import { useRouter } from "vue-router";
export interface menuMap {
  [key: string]: {
    name: string,
    icon: string,
    path: string,
  };
}



export default () => {
  const router = useRouter(); // 路由
  console.log("rr", router);
  const menuMap: menuMap = {
    "ds": { name: "系統設計", icon: "icon-sliders", path: "" },
    "theme-colors": { name: "主題色", icon: "icon-adjust", path: "" },
    "theme-fonts": { name: "字型", icon: "icon-font", path: "" },
    "icons": { name: "Icon", icon: "icon-star-half-alt", path: "" },
    home: { name: "儀表板", icon: "icon-globe", path: "" },
    "aa": { name: "aa", icon: "icon-sliders", path: "" },
    "bb": { name: "bb", icon: "icon-sliders", path: "" },
  };
  return { menuMap };
};
