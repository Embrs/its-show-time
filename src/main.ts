import antd from "@/plugin/antd";
import "@/plugin/firebase";
import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(antd);
app.mount("#app");