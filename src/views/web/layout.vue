<template lang="pug">
//- 請填寫功能描述👈
#Layout(:class="[{'full-page': fullPage.isFullPage}]")
  header.info-area
    UserInfo
  .page-bar-area
    PageBar
  .menu-area 
    PageMenu
    //- RouterLink(to="/") Home
    //- RouterLink(to="/about") About
    //- RouterLink(to="/bgm-login") BGM login
    //- RouterLink(to="/firebase") Firebase
  main.page-area page
    aButton(@click="fullPage.SetFull(true)") full
    aButton(@click="fullPage.SetFull(false)") unfull
    .full-btn
      FullscreenOutlined
      FullscreenExitOutlined
    <fullscreen-outlined /> 
    RouterView
  footer.footer-area
    LayoutFooter
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import UserInfo from "@/components/layout/web/user-info/index.vue";
import PageMenu from "@/components/layout/web/page-menu/index.vue";
import LayoutFooter from "@/components/layout/web/layout-footer/index.vue";
import PageBar from "@/components/layout/web/page-bar/index.vue";
// icon
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons-vue";

import {useFullPageStore} from "@/stores/ctrl";


const fullPage = useFullPageStore();
// script
</script>

<style lang="scss" scoped>
// 佈局
#Layout {
  height: 100vh;
  @include web-media {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas: 
      "info page-bar"
      "info page"
      "menu page"
      "footer page";
  }
  @include mobile-media {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas: 
      "info menu"
      "page-bar page-bar"
      "page page"
      "footer footer";
  }

  .info-area {
    grid-area: info; 
  }
  .page-bar-area {
    grid-area: page-bar; 
  }
  .menu-area {
    grid-area: menu; 
  }
  .page-area {
    grid-area: page; 
    position: relative;
    overflow: overlay;
  }
  .footer-area {
    grid-area: footer; 
  }
}
// 組件
#Layout {
  
}

.full-page {
  .info-area,
  .page-bar-area,
  .menu-area,
  .footer-area {
    display: none !important;
  }
}
</style>
