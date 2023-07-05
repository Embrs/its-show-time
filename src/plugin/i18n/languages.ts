const typeIndex = {
  "zh-TW": 0,
  "en-US": 1,
};

interface LangData {
  [key: string]: string[];
}
// -------------------------------------------------------------------------------------------------
const langData: LangData = {
  // key: ["zh-TW", "en-US"]
  "page.home": ["儀表板", "Dashboard"],
  "page.editor": ["富文本", "Editor"],
  "page.ds": ["系統設計", "Design System"],
  "page.i18n": ["多語系", "I18n"],
  "page.icons": ["Icon", "Icon"],
  "page.theme-colors": ["主題色", "Theme Color"],
  "page.theme-fonts": ["字型", "Font"],
  "page.com": ["模組設計", "UI Mod"],
  "page.dialog": ["彈窗與對話框", "Dialog"],
  "page.table": ["表格", "Table"],
  "page.aa": ["aa", "aa"],
  "page.bb": ["bb", "bb"],
  "page.cc": ["cc", "cc"],
  "page.dd": ["dd", "dd"],
  "i18n.ex": [
    `
    醫生問小明：如果把你一邊耳朵割掉你會怎麼樣？
    小明：我會聽不見
    醫生又問：那再割掉另一個耳朵呢？
    小明：我會看不見
    醫生問他為什麼...
    小明：因為我有戴眼鏡
    `,
    `
    Doctor: What would happen if I cut off one of your ears, Little Ming?
    Little Ming: I wouldn't be able to hear.
    Doctor: And what if I cut off the other ear?
    Little Ming: I wouldn't be able to see.
    Doctor: Why is that?
    Little Ming: Because I wear glasses.
    `
  ]
};

export {
  typeIndex,
  langData
};