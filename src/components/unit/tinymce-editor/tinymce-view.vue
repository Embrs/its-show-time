<template lang="pug">
//- 請填寫功能描述👈
#TinymceView
  div(v-html="modelValue")
</template>

<script setup lang="ts">
import { onMounted } from "vue";
defineProps({
  modelValue: {
    type: String,
    default: "",
  }
});
onMounted(() => {
  const recaptchaScript = document.createElement("script");
  recaptchaScript.setAttribute("src", "https://www.instagram.com/embed.js");
  document.head.appendChild(recaptchaScript);
});
</script>

<style lang="scss" scoped>
// 佈局
#TinymceView{
  *     { letter-spacing: 0.1rem;}
    ::v-deep img   { max-width:100%; display:block; height:auto; object-fit:cover }
    ::v-deep a     { text-decoration: none; }
    ::v-deep p     { line-height:1.4; margin: 0px; font-size: 14px; font-family: "Noto Serif TC"}
    ::v-deep table { word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#999; }
    ::v-deep .mce-object-iframe {
      width: 100%;
      max-width: 600px;
      box-sizing:border-box;
      margin:0 auto;
      padding:0;
      
    }
    ::v-deep iframe {
      width: 100%;
      max-width: 600px;
    }
    ::v-deep iframe:not(.instagram-media) {
      height: calc(9 / 16 * 100vw);
      max-height: 400px;
    }
    ::v-deep article { white-space: normal !important; }
    ::v-deep .instagram-media {
      margin: 0 auto !important;
    }
    ::v-deep ul, ::v-deep ol { margin: 0px;}
    ::v-deep td, ::v-deep pre {
      font-family: Verdana, Arial, Helvetica, sans-serif;
      font-size: 14px;
      margin: 0;
    }
    ::v-deep h1, ::v-deep h2, ::v-deep h3, ::v-deep h4, ::v-deep h5, ::v-deep h6 { margin: 0px; font-weight: bold;}
  }
// 組件
#TinymceView {
}
</style>
