import { reactive } from "vue";
import { defineStore } from "pinia";

export interface ColorMap {
  [key: string]: string;
}

// 設定頁面滿屏
export const useThemeColorStore = defineStore("themeColor", () => {
  const colors: ColorMap = reactive({
    "fontPrimary": "#3E3E3E",
    "fontSecondary": "#FFFFFF",
    "fontDisabled": "#858585",
    "bgPrimary": "#FFFFFF",
    "bgSecondary": "#3E3E3E",
    "bgDisabled": "#ABABAB",
    "processing": "#79D6E2",
    "success": "#61DD50",
    "warning": "#ECE86C",
    "error": "#ED4493",
  });

  const GetColor = (key: string): string => {
    return colors[key] || "";
  };

  const SetColor = (key: string, value: string) => {
    colors[key] = value;
  };
  return { colors, GetColor, SetColor };
});

