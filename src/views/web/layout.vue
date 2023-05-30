<template lang="pug">
//- 請填寫功能描述👈
#Layout(:class="[{'full-page': fullPageStore.isFullPage}]")
  header.info-area
    UserInfo
  .page-bar-area
    PageBar
  .menu-area 
    PageMenu
  main.page-area
    .full-btn
      PageFullBtn
    RouterView
  footer.footer-area
    LayoutFooter
</template>

<script setup lang="ts">
import UserInfo from "@/components/layout/web/user-info/index.vue";
import PageMenu from "@/components/layout/web/page-menu/index.vue";
import LayoutFooter from "@/components/layout/web/layout-footer/index.vue";
import PageBar from "@/components/layout/web/page-bar/index.vue";
import PageFullBtn from "@/components/layout/web/page-full-btn/index.vue";
// store
import { useFullPageStore } from "@/stores/ctrl";
// 頁面延展 Store
const fullPageStore = useFullPageStore();

// script
</script>

<style lang="scss" scoped>
// 佈局
#Layout {
  color: var(--fontPrimary);
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
  .full-btn {
    position: sticky;
    top: 10px;
    margin-right: 10px;
    z-index: 1;
  }
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
