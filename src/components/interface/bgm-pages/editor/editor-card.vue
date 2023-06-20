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
    border-radius: 10px;
    background-color: #fff;
    overflow: auto;
  }
}
</style>
