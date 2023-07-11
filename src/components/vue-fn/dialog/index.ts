import { render, h } from "vue";
import AxDialog from "@/components/unit/ax-dialog/index.vue";

const RenderDialog = (resolve: Function , elName: string) => {
  const body = document.querySelector(elName);
  const el = document.createElement("div");
  body?.appendChild(el);
  if (!el) return;
  const vnode = h(
    AxDialog, 
    {
      aa: "123",
      OnClose: () => {
        resolve("close");
        el.remove();
      },
      OnOk: () => {
        resolve("ok");
        el.remove();
      },
    }
    );
  render(vnode, el);
};

export const OpenDialog = (elName = "#BgmPage") => new Promise((resolve) => RenderDialog(resolve, elName));