import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";

export interface ColorMap {
  [key: string]: string;
}

// 設定頁面滿屏
export const useThemeColorStore = defineStore("counter", () => {
  const color = ref("#aaa");
  const colors: ColorMap = reactive({
    "primaryDark": "#189086",
    "primary": "#118D83",
    "primaryLight": "#1DB0A3",
    "secondaryDark": "#1F3A51",
    "secondary": "#455AA9",
    "secondaryLight": "#6978CC",
  });

  const GetColor = (key: string): string => {
    return colors[key] || "";
  };

  const SetColor = (key: string, value: string) => {
    colors[key] = value;
  };
  return { color, colors, GetColor, SetColor };
});

