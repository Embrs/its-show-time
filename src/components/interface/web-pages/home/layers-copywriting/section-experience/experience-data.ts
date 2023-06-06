import tyrLogo from "@/assets/images/experience/tyr.png";
import axolotlLogo from "@/assets/images/experience/axolotl.png";
import ccLogo from "@/assets/images/experience/cc.png";
import hirataLogo from "@/assets/images/experience/hirata.png";

//  -------------------------------------------------------------------------------------------------
const job_tyr: JobData = {
  logo: tyrLogo,
  title: "泰爾科技股份有限公司",
  subTitle: "2024.04 ～ 現在",
  job: "技術顧問、前端組組長",
  intruduce: "我在公司成立初期擔任 Axolotl 技術顧問的角色，負責協助專案架構的規劃。隨著公司的穩定成長，我轉為擔任前端主管的職位，專注於這一領域的工作。在我的任職期間，我負責設立團隊的規範，進行新人的培訓和指導，參與跨組的需求討論，並克服各種技術上的障礙，引入新的技術。我參與開發了三個產品，其中以 Relithe 在二手精品界享有盛名。我們的網站也引入了一些技術，包括 SEO 優化、PWA、即時版本刷新等，官網我們使用 Nuxt 進行開發。此外，我還參與了一些小型項目，例如精品爬蟲和 IG 直播擷取器等。這些項目都展示了我對於探索新技術和解決問題的熱情。",
  project: [
    "Reliteh 二手精品媒合平台，使用 Nuxt、docker、金流串接，第三方登入等多項技術",
    "Purest 工作互動平台，解決疫情居家工作問題，使用 Vue、Electron",
    "Woah 二手精品C2C平台，以面交為核心，使用 Nuxt 技術",
    "精品爬蟲，使用 Puppeteer 技術",
    "IG 直撥工具，使用 Vue、FB SDK 技術"
  ],
  borderColor: "#1b9ad2",
  bgColor: "#ffffff",
  fontColor: "#497999",
  logoBg: "transparent"
};

const job_axolotl: JobData = {
  logo: axolotlLogo,
  title: "阿斯特資訊有限公司",
  subTitle: "2018.07 ～ 2021.04",
  job: "前端工程師、UIUX",
  intruduce: "我是公司的共同創辦人之一，與四位好友一起創立了這家公司。在公司中，我擔任前端開發和形象設計的職位。我們的公司以一種神秘的生物 Axolotl 命名，象徵著我們公司擁有強大的再生能力。我們的公司接洽了許多不同領域的專案，包括學校、台電、協會和技術外包等，其中網站項目以後台開發為主。我們以敏捷的精神工作，迭代交付我們的成果。在這個過程中，我學會了如何與客戶接洽，討論需求，並且我的技術實作能力也越來越扎實。這段經歷讓我有機會不斷成長並提升自己的專業能力，我相信我在面對挑戰和解決問題方面有著豐富的經驗和能力。",
  project: [
    "公司形象設計、Logo、名片設計",
    "彰師附工 - 技藝競賽報名審核平台",
    "麵包花協會 - 會員管理平台 ",
    "台電 - 電力數據研析平台",
    "CSOFans - 粉專管理平台",
    "98Talking - 即時聊天室",
    "論文爬蟲",
  ],
  borderColor: "#556472",
  bgColor: "#ffffff",
  fontColor: "#556472",
  logoBg: "transparent"
};

const job_cc: JobData = {
  logo: ccLogo,
  title: "長青資訊有限公司",
  subTitle: "2017.07 ～ 2018.07",
  job: "前端工程師",
  intruduce: "第一次進行前端開發，負責重新翻寫一個無法維護的舊有後台系統，並採用當時非常熱門的Vue框架進行重製。在這個過程中，引入了i18n多語系功能，以確保系統能夠支援多種語言。此外，我還使用了PixiJS技術開發了一些小遊戲。這些經驗奠定我往後的前端職涯。",
  project: [
    "後台系統建置",
    "活動小遊戲",
  ],
  borderColor: "#41b488",
  bgColor: "#ffffff",
  fontColor: "#2aaacc",
  logoBg: "transparent"
};

const job_hirata: JobData = {
  logo: hirataLogo,
  title: "台灣平田機工",
  subTitle: "2015.06 ～ 2017.06",
  job: "軟體工程師",
  intruduce: "公司為導體設備供應商，公司主要專注於開發機械化晶圓的搬運設備。在這家公司中，我擔任 EFEM 的軟體設計師一職，負責確保設備的穩定運行。設備有賣到台積電、日月光等科技大廠，證明公司的技術和產品的優越性。",
  project: [
    "API 開發，流程化整合設備 EFEM 基礎動作行為，提供標準化的交握控制",
    "主控程式開發，自動化派工流程模組設計",
    "UI 介面設計、Interlock 防呆機制設計",
    "SECS / GEM通訊整合",
    "客戶主控程式開發指導",
    "設備出貨千枚傳送壓力測試",
    "現場設備調整支援，問題排除",
    "6S 工廠環境督導",
  ],
  borderColor: "#1365a8",
  bgColor: "#ffffff",
  fontColor: "#1365a8",
  logoBg: "#639bca"
};
//  -------------------------------------------------------------------------------------------------

export interface JobData {
  logo: string,
  title: string,
  subTitle: string,
  job: string,
  intruduce: string,
  project: string[],
  borderColor: string,
  bgColor: string,
  fontColor: string,
  logoBg: string,
}

export default {
  tyr: job_tyr,
  axolotl: job_axolotl,
  cc: job_cc,
  hirata: job_hirata
};