import antd from "@/plugin/antd";
import { createApp } from "vue";
import { createPinia } from "pinia";
import $gsap from "@/plugin/gsap";
import $firebase from "@/plugin/firebase";

import router from "./router";
import App from "./App.vue";

import "@/utils/console.ts";

const app = createApp(App);
app.config.globalProperties.$gsap = $gsap;
app.config.globalProperties.$firebase = $firebase;

app.use(createPinia());
app.use(router);
app.use(antd);

app.use((app) => {
  app.mixin({
    mounted() {
      // 在组件挂载后，可以访问到文档对象并进行头部和元标记的操作
      const metaTags = [
        { name: "viewport", content: "width=device-width,initial-scale=1,maximum-scale=5,minimum-scale=1,viewport-fit=cover" }
        // 更多的头部和元标记...
      ];

      metaTags.forEach((metaTag) => {
        const meta = document.createElement("meta");
        Object.entries(metaTag).forEach(([key, value]) => {
          meta.setAttribute(key, value);
        });
        document.head.appendChild(meta);
      });
    },
  });
});

app.mount("#app");