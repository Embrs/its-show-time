import { title } from "process";
import tyrLogo from "@/assets/images/experience/tyr.png";
import axolotlLogo from "@/assets/images/experience/axolotl.png";
import ccLogo from "@/assets/images/experience/cc.png";
import hirataLogo from "@/assets/images/experience/hirata.png";

export interface JobData {
  logo: string,
  title: string,
  subTitle: string,
  job: string,
  intruduce: string,
  works: string[],
  borderColor: string,
  bgColor: string,
  fontColor: string,
  logoBg: string,
}
//  -------------------------------------------------------------------------------------------------
const job_tyr: JobData = {
  logo: tyrLogo,
  title: "泰爾科技股份有限公司",
  subTitle: "2024.04 ～ 現在",
  job: "技術顧問、前端組組長",
  intruduce: "asdfasdfasdfasdf",
  works: [
    "網站架構規劃",
    "前後台產品開發",
    "跨組別溝通與需求討論",
    "制定團隊規範",
    "技術指導與交流",
    "克服技術障礙"
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
  job: "同創辦人",
  intruduce: "asdfasdfasdf",
  works: [
    "公司形象設計",
    "課戶訪談，整理需求",
    "UIUX 設計 ",
    "網站架構規劃與開發",
    "外包支援",
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
  job: "技術顧問、前端",
  intruduce: "l;ajdskl;fjasldfjlajksdfj;laksjd\n;alsjdf;lasjdf;lkajsdf;lj",
  works: [
    "後台網站重製",
    "資訊報表呈現",
    "活動畫面協助",
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
  intruduce: "asdfasdfasdf",
  works: [
    "API 開發，流程化整合設備 EFEM 基礎動作行為，提供標準化的交握控制",
    "主控程式開發，自動化派工流程模組設計",
    "UI 介面設計、Interlock 防呆機制設計",
    "SECS / GEM通訊整合",
    "客戶主控程式開發指導",
    "設備出貨千枚傳送壓力測試",
    "現場設備調整支援，問題排除",
    "6S 工廠環境督導",
  ],
  borderColor: "#005499",
  bgColor: "#ffffff",
  fontColor: "#005499",
  logoBg: "#005499"
};
//  -------------------------------------------------------------------------------------------------
export default {
  tyr: job_tyr,
  axolotl: job_axolotl,
  cc: job_cc,
  hirata: job_hirata
};