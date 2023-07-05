import antd from "@/plugin/antd";
import { createApp } from "vue";
import { createPinia } from "pinia";
import $gsap from "@/plugin/gsap";
import $firebase from "@/plugin/firebase";
import $mitt from "@/plugin/mitt";
import metaTags from "@/plugin/meta-tags";
import router from "./router";
import App from "./App.vue";
import i18n from "@/plugin/i18n";


const app = createApp(App);
app.config.globalProperties.$gsap = $gsap;
app.config.globalProperties.$firebase = $firebase;
app.config.globalProperties.$mitt = $mitt;

app.use(createPinia());
app.use(router);
app.use(antd);
app.use(metaTags);
app.use(i18n);

app.mount("#app");