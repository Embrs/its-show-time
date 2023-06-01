import { createRouter, createWebHashHistory } from "vue-router";
import webLayout from "@/views/web/layout.vue";
import webRoutes from "./_auto-web-pages";
import bgmRoutes from "./_auto-bgm-pages";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // hash #
  routes: [
    {
      path: "/",
      name: "web-layout",
      component: webLayout,
      children: webRoutes
    },
    // -------------------------------------------------------------------------------------------------
    {
      path: "/bgm-login",
      name: "bgm-login",
      component: () => import("@/views/bgm/login.vue"),
    },
    {
      path: "/bgm",
      name: "bgm-layout",
      component: () => import("@/views/bgm/layout.vue"),
      children: bgmRoutes
    },
    // -------------------------------------------------------------------------------------------------
    {
      path: "/:pathMatch(.*)",
      name: "NotFound",
      component: () => import("@/views/no-page.vue")
    }
  ]
});
export default router;
