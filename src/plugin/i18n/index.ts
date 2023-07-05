// https://muki.tw/tech/vue/typescript-vue3-vue-i18n/
import { createI18n } from "vue-i18n";
import { typeIndex, langData } from "./languages";

type LangType = "zh-TW"|"en-US";
interface MessageSchema {
  [key: string]: string;
}
const LangMap = (type: LangType = "zh-TW"): MessageSchema => {
  const _index = typeIndex[type] ?? -1;
  if (_index === -1) return {};
  const _map: MessageSchema = {};
  for(const key of Object.keys(langData)) {
    _map[key] = langData[key][_index];
  }
  return _map;
};

const zhTwMap = LangMap("zh-TW");
const enUsMap = LangMap("en-US");
const i18n = createI18n<[MessageSchema], "zh-TW" | "en-US">({
  legacy: false, // 要把 legacy 設為 false，才可以使用 Composition API
  locale: "zh-TW",
  fallbackLocale: "zh-TW",
  globalInjection: true,
  messages: {
    "zh-TW": zhTwMap,
    "en-US": enUsMap
  }
});

export default i18n;