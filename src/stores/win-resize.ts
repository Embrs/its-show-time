import { ref } from "vue";
import { defineStore } from "pinia";
import throttle from "lodash/throttle";

type Device = "pc" | "mobile";
type RWD = "web" | "mobile"

// 設定頁面滿屏
export const useWinSize = defineStore("winSize", () => {
  const device = ref<Device>("pc");
  const rwd = ref<RWD>("web");

  const SetSize = throttle(() => {
    rwd.value =  window.innerWidth > 1024 ? "web" : "mobile";
    const isMobile = window.navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    device.value = isMobile? "mobile" : "pc";
  }, 400);
  return { device, rwd , SetSize};
});

