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
// import "tinymce/themes/silver/theme"; // 主題樣式
import "tinymce/plugins/lists"; // 列表插件
import "tinymce/plugins/advlist"; // 高級列表插件
import "tinymce/plugins/image"; // 插入上傳圖片插件
import "tinymce/plugins/media"; // 插入視頻插件
import "tinymce/plugins/wordcount"; // 字數統計插件
import "tinymce/plugins/link"; // 超鏈接插件
import "tinymce/plugins/autolink"; // 自動鏈接插件
import "tinymce/plugins/preview"; // 預覽
import "tinymce/plugins/quickbars";
import "tinymce/plugins/emoticons";
import "tinymce/plugins/emoticons/js/emojis.js";
// import "tinymce/plugins/table";
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
    default: " lists advlist image media wordcount link autolink preview instagram quickbars emoticons "
  },
  toolbar: {
    type: [String, Array],
    default:
      "removeformat formatselect lineheight | fontsizeselect fontselect bold italic underline strikethrough | forecolor backcolor| alignleft aligncenter alignright alignjustify | numlist bullist | outdent indent blockquote | image media instagram | preview | undo redo| axupimgs | emoticons"
  }
});

const emit = defineEmits(["update:modelValue"]);

const init = reactive({
  language: "zh_TW",
  height: "100%",
  autoresize_bottom_margin: 50,
  menubar: false,
  content_css: false,
  skin: false,
  plugins: props.plugins,
  toolbar: props.toolbar,
  quickbars_insert_toolbar: false,
  branding: false,
  //-------------------------------------
  browser_spellcheck: true, // 拼寫檢查
  object_resizing: false, // 是否禁用表格圖片大小調整
  statusbar: true, // 顯示編輯器底部的狀態欄
  elementpath: false, // 禁用下角的當前標籤路徑
  paste_data_images: false, // 允許粘貼圖像
  autosave_ask_before_unload: false, // 去除關閉/刷新網頁時彈出對話框
  fontsize_formats: "12px 14px 16px 18px 24px 30px 36px",
  // 字型
  font_formats: `
    Arial=Arial,Helvetica,sans-serif;
    Georgia=Georgia,serif;
    Impact=Impact,Charcoal,sans-serif;
    Tahoma=Tahoma,Geneva,sans-serif;
    Verdana= Verdana,Geneva,sans-serif;
    Noto Sans TC=Noto Sans TC;`,
    images_upload_handler: async (blobInfo: {

      base64: any; blob: () => any; 
      }, success: (arg0: any) => void, failure: any) => {
    
      // base64
      const img = "data:image/jpeg;base64," + blobInfo.base64();
      success(img);

      // file
      // const file = blobInfo.blob();
      // const img = await this.UpdageFlow(file);
      // success(img);
    },
    extended_valid_elements: "script[src|async|defer|type|charset]", // 默認情況下 tinmye 阻止腳本代碼
    setup (editor: { on: (arg0: string, arg1: { (args: any): void; (e: any): void; }) => void; }) {
      editor.on("init", function (args: { target: { id: any; }; }) {
        // editorId = args.target.id;
      });

      editor.on("input change undo redo", function (e: any) {
        // this.OnChcnge();
        // this.$emit("on-change");
      });
    }
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
