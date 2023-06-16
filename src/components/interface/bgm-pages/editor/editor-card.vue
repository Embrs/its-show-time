<template lang="pug">
//- 富文本
#EditorCard
  TinymceEditor(v-model="editorData")
  .text-view(v-html="editorData")
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import TinymceEditor from "@/components/unit/tinymce-editor/index.vue";

const editorData = ref("<p>Content of the editor.</p>");

watch(editorData, (newValue) => {
  console.log(newValue);
});
</script>

<style lang="scss" scoped>
// 佈局
#EditorCard {
  display: grid;
  gap: 10px;
}
// 組件
#EditorCard {
  .text-view {
    background-color: #fff;
    height: 350px;
    overflow: auto;
  }
}
</style>
