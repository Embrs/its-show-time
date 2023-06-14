import { encrypt, decrypt } from "@/plugin/utils/tools/base64-hash";
const useHash = false;

export interface KeyMap {
  [key: string]: string;
}

// key對應表
export const keyMap: KeyMap = {
  theme: "THEME", // 主題色,
  bmgKeepPage: "BGMKEEPPAGE", // bgm 分頁
  bgmCurrentPage: "BGMCURRENTPAGE" // bmg 目前頁面
};

// 設定項目
export const SetHash = (key: string, anyValue: any) => {
  try {
    const _key = useHash ? encrypt(key) : key;
    const _data = JSON.stringify(anyValue);
    const _val = useHash ? encrypt(_data) : _data;
    if (_key && _val) {
      localStorage.setItem(_key, _val);
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

// 提取項目
export const GetHash = (key: string) => {
  try {
    const _key = useHash ? encrypt(key) : key;
    const _anyValue = localStorage.getItem(_key) || "";
    const _val = useHash ? decrypt(_anyValue) : _anyValue;
    if (_val) {
      return JSON.parse(_val);
    }
    return undefined;
  } catch (error) {
    return undefined;
  }
};

// 清除項目
export const RemoveHash = (key: string) => {
  try {
    const _key = useHash ? encrypt(key) : key;
    if (_key) {
      localStorage.removeItem(_key);
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

// 清除項目
export const RemoveAll = (keepKeys: string[] = []) => {
  try {
    for (const _i in keyMap) {
      const key = keyMap[_i];
      const _key = useHash ? encrypt(key) : key;
      if (!keepKeys.includes(_key)) {
        RemoveHash(key);
      }
    }
  } catch (error) {
    return false;
  }
};
