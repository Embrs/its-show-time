<template lang="pug">
//- 富文本
#EditorCard
  TinymceEditor(v-model="editorData")
  .text-view
    TinymceView(v-model="editorData")
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import TinymceEditor from "@/components/unit/tinymce-editor/index.vue";
import TinymceView from "@/components/unit/tinymce-editor/tinymce-view.vue";
const editorData = ref("<p>請輸入文章.</p>");

watch(editorData, (newValue) => {
  console.log(newValue);
});
</script>

<style lang="scss" scoped>
// 佈局
#EditorCard {
  @include size;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
}
// 組件
#EditorCard {
  .text-view {
    @include size;
    padding: 10px;
    // border-radius: 10px;;
    background-color: #e0f5ec;
    overflow: auto;
  }
}
</style>
