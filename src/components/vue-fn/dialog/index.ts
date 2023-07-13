import { render, h } from "vue";
import AxDialog from "./ax-dialog.vue";
import type { StickyOffsets } from "ant-design-vue/lib/vc-table/interface";
interface DialogConfig {
  to?: string
  content: string, // 內文
  okText?: string, // 確定文字
  cancelText?: string, // 取消文字
  showOkButton?: boolean, // 顯示確定
  showCancelButton?: boolean, // 顯示取消
  maskCanClose?: boolean, // 遮罩關閉
}

const RenderDialog = (resolve: Function , config: DialogConfig) => {
  const body = document.querySelector(config?.to ?? "#BgmPage");
  const el = document.createElement("div");
  body?.appendChild(el);
  if (!el) return;
  const vnode = h(
    AxDialog, 
    {
      ...config,
      OnClose: () => {
        resolve("close");
        el.remove();
      },
      OnOk: () => {
        resolve("ok");
        el.remove();
      },
      OnCancel: () => {
        resolve("cancel");
        el.remove();
      }
    }
    );
  render(vnode, el);
};

export const OpenDialog = (config: DialogConfig) => new Promise((resolve) => RenderDialog(resolve, config));