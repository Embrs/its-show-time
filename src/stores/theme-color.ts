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
    // -------------------------------------------------------------------------------------------------
    "bgmFont100": "#72C0B8",
    "bgmFont200": "#FFFFFF",
    "bgmFont300": "#62fdf9",

    "bgmBg100": "#1a3142",
    "bgmBg200": "#171c2c",
    "bgmBg300": "#3e7486",

    "bgmBorder100": "#3e7486",
    "bgmBorder200": "#0B1773",

  });

  const GetColor = (key: string): string => {
    return colors[key] || "";
  };

  const SetColor = (key: string, value: string) => {
    colors[key] = value;
  };
  return { colors, GetColor, SetColor };
});

