<template lang="pug">
//- 請填寫功能描述👈
#TinymceEditor
  Editor(v-model="editorValue" :init="init")
</template>

<script setup lang="ts">
import { reactive, ref, watch, toRefs } from "vue";
// TinyMCE-Vue
import Editor from "@tinymce/tinymce-vue";
import "tinymce/tinymce";
import "tinymce/models/dom";
// 外觀
import "tinymce/skins/ui/oxide/content.css";
import "tinymce/skins/ui/oxide/skin.css";
import "tinymce/themes/silver";
// Icon
import "tinymce/icons/default";
// 用到的外掛
import "tinymce/plugins/emoticons";
import "tinymce/plugins/emoticons/js/emojis.js";
import "tinymce/plugins/table";
import "tinymce/plugins/quickbars";
// 語言包
import "tinymce-i18n/langs5/zh_TW.js";

//  -------------------------------------------------------------------------------------------------
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  plugins: {
    type: [String, Array],
    default: "quickbars emoticons table",
  },
  toolbar: {
    type: [String, Array],
    default:
      "bold italic underline strikethrough | fontsize fontfamily | forecolor backcolor | alignleft aligncenter alignright alignjustify|bullist numlist |outdent indent blockquote | undo redo | axupimgs | removeformat | table | emoticons",
  },
});

const emit = defineEmits(["update:modelValue"]);

const init = reactive({
  language: "zh_TW",
  height: "100%",
  menubar: false,
  content_css: false,
  skin: false,
  plugins: props.plugins,
  toolbar: props.toolbar,
  quickbars_insert_toolbar: false,
  branding: false,
  fontsize_formats: "8px 10px 12px 14px 18px 24px 36px",
  // 字型
  font_formats: `
    Arial=Arial,Helvetica,sans-serif;
    Georgia=Georgia,serif;
    Impact=Impact,Charcoal,sans-serif;
    Tahoma=Tahoma,Geneva,sans-serif;
    Verdana= Verdana,Geneva,sans-serif;
    Noto Sans TC=Noto Sans TC;
  `,
  // style 樣式
  content_style: `
    *                  { letter-spacing: 0.1rem;}
    img                { max-width:100%; display:block; height:auto; object-fit:cover }
    a                  { text-decoration: none; }
    p                  { line-height:1.4; margin: 0px; font-size: 14px; font-family: Noto Serif TC}
    table              { word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#999; }
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
  `,
  
});

const { modelValue } = toRefs(props);
const editorValue = ref(modelValue.value);

watch(modelValue, (newValue) => {
  editorValue.value = newValue;
});

watch(editorValue, (newValue) => {
  emit("update:modelValue", newValue);
});

</script>

<style lang="scss" scoped>
// 佈局
#TinymceEditor {
}
// 組件
#TinymceEditor {
}
</style>
  