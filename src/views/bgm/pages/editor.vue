<template lang="pug">
//- 富文本a
#Editor 
  EditorCard
</template>

<script setup lang="ts">
import Todo from "@/components/module/todo.vue";
import EditorCard from "@/components/interface/bgm-pages/editor/editor-card.vue";

</script>

<style lang="scss" scoped>
// 佈局
#Editor {
  padding: 10px;
  @include size;
}
// 組件
#Editor {
}
</style>
