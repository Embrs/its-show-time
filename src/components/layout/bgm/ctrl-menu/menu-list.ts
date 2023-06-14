import { ref } from "vue";
import MenuMapFn from "@/components/vue-fn/bgm/bgm-menu-map";

export interface MenuItem {
  name: string,
  routeName: string,
  key: string,
  path: string,
  icon: string,
  children: MenuItem[]
  isOpen: boolean
}
export interface MenuObj {
  [key: string]: {
    name: string,
    routeName: string,
    key: string,
    path: string,
    icon: string,
    childrenMap: MenuObj
  }
}
//  -------------------------------------------------------------------------------------------------
export default () => {
  const { menuMap, bgmPages } = MenuMapFn();
  console.log(menuMap);
  // 生成樹
  const menuObj: MenuObj = {};
  for (const pageRoute of bgmPages) {
    const keys = pageRoute.path.replace("/bgm/", "").split("/");
    let _currentObj: MenuObj = menuObj;
    for (const key of keys) {
      // 不存在，建立
      if (!_currentObj[key]) {
        _currentObj[key] = {
          routeName: "",
          path: "",
          key,
          name: menuMap[key]?.name || "",
          icon: menuMap[key]?.icon || "",
          childrenMap: {},
        };
        // 最後一位
        if (keys[keys.length - 1] === key) {
          _currentObj[key].path = pageRoute.path;
          _currentObj[key].routeName = pageRoute.name as string;
        }
      }
      _currentObj = _currentObj[key].childrenMap;
    }
  }
  // -------------------------------------------------------------------------------------------------
  // 轉 array map
  const menuList = ref<MenuItem[]>([]);
  const firstPage = ref<MenuItem>();

  const SortMenu = (_menuObj: MenuObj, _list: MenuItem[]) => {
    if (Object.keys(_menuObj).length === 0) return;
    for (const menuKey in menuMap) {
      if (!_menuObj[menuKey]) continue;
      const { routeName, path, key, name, icon, childrenMap } = _menuObj[menuKey];
      const menuItem: MenuItem = {
        name, routeName, key, path, icon,
        children: [],
        isOpen: false
      };
      if (!firstPage.value && path) {
        firstPage.value = menuItem;
      }
      SortMenu(childrenMap, menuItem.children);
      _list.push(menuItem);
    }
  };
  SortMenu(menuObj, menuList.value);
  return { menuList, firstPage };
};
