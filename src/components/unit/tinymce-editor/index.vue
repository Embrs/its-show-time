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
import "tinymce/skins/ui/oxide/skin.css";
import "tinymce/themes/silver";
// Icon
import "tinymce/icons/default";
// 用到的外掛
import "tinymce/icons/default/icons"; // 樣式圖標
import "tinymce/themes/silver/theme"; // 主題樣式
// import "tinymce/plugins/table"; // 插入表格插件
import "tinymce/plugins/lists"; // 列表插件
import "tinymce/plugins/advlist"; // 高級列表插件
import "tinymce/plugins/wordcount"; // 字數統計插件
import "tinymce/plugins/link"; // 超鏈接插件
import "tinymce/plugins/autolink"; // 自動鏈接插件
import "tinymce/plugins/preview"; // 預覽
import "tinymce/plugins/image"; // 插入上傳圖片插件
import "tinymce/plugins/media"; // 插入視頻插件

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
    default: "lists advlist image media wordcount link hr autolink  preview instagram"
  },
  toolbar: {
    type: [String, Array],
    default:
      "removeformat | formatselect lineheight | fontsizeselect fontselect bold italic underline strikethrough | forecolor backcolor| alignleft aligncenter alignright alignjustify | numlist bullist | outdent indent | image media instagram | preview | undo redo",
  },
});

const emit = defineEmits(["update:modelValue"]);

const init = reactive({
  language: "zh_TW",
  height: "400",
  menubar: false,
  content_css: false,
  skin: false,
  plugins: props.plugins,
  toolbar: props.toolbar,
  quickbars_insert_toolbar: false,
  branding: false,
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
