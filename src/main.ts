import antd from "@/plugin/antd";
import { createApp } from "vue";
import { createPinia } from "pinia";
import $gsap from "@/plugin/gsap";
import $firebase from "@/plugin/firebase";
import metaTags from "@/plugin/meta-tags";
import router from "./router";

import App from "./App.vue";

const app = createApp(App);
app.config.globalProperties.$gsap = $gsap;
app.config.globalProperties.$firebase = $firebase;

app.use(createPinia());
app.use(router);
app.use(antd);
app.use(metaTags);

app.mount("#app");