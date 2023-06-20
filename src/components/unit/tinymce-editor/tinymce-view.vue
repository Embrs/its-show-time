<template lang="pug">
//- 請填寫功能描述👈
#TinymceView
  div(v-html="modelValue")
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: "",
  }
});
</script>

<style lang="scss" scoped>
// 佈局
#TinymceView{
  *     { letter-spacing: 0.1rem;}
  img   { max-width:100%; display:block; height:auto; object-fit:cover }
  a     { text-decoration: none; }
  p     { line-height:1.4; margin: 0px; font-size: 16px; font-family: "Noto Serif TC"}
  table { word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#999; }
  .mce-object-iframe {
    width: 100%;
    max-width: 600px;
    box-sizing:border-box;
    margin:0 auto;
    padding:0;

  }
  iframe {
    width: 100%;
    max-width: 600px;
  }
  iframe:not(.instagram-media) {
    height: calc(9 / 16 * 100vw);
    max-height: 400px;
  }
  article { white-space: normal !important; }
  .instagram-media {
    margin: 0 auto !important;
  }
  ul,ol { margin: 0px;}
  td, pre {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 { margin: 0px; font-weight: bold;}
}
// 組件
#TinymceView {
}
</style>
