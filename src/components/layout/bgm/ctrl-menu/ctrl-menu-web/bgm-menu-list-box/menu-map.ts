export interface menuMap {
  [key: string]: {
    name: string,
    icon: string,
    isGroup?: boolean
  };
}

const menuMap: menuMap = {
  home: { name: "儀表板", icon: "icon-globe" },
  "ds": { name: "系統設計", icon: "icon-sliders", isGroup: true },
  "theme-colors": { name: "主題色", icon: "icon-adjust" },
  "theme-fonts": { name: "字型", icon: "icon-font" },
  "icons": { name: "Icon", icon: "icon-star-half-alt" },
  "aa": { name: "aa", icon: "icon-sliders", isGroup: true },
  "bb": { name: "bb", icon: "icon-sliders" },
};

export default menuMap;
