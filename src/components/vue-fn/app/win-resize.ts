import { onMounted, onBeforeUnmount, getCurrentInstance } from "vue";
import { useWinSize } from "@/stores/win-resize";

//https://github.com/developit/mitt
export default () => {
  const winSizeStore = useWinSize();

  const { proxy } = getCurrentInstance()!;
  const $mitt = proxy!.$mitt;

  const WinResize =() => {
    winSizeStore.SetSize();
    $mitt.emit("on-win-resize");
  };

  onMounted(() => {
    window.addEventListener("resize", WinResize);
    winSizeStore.SetSize();
  });
  
  onBeforeUnmount(()=> {
    window.removeEventListener("resize", WinResize);
  });

};