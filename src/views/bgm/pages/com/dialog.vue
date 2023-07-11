<template lang="pug">
//- 請填寫功能描述👈
#Dialog
  Todo(text="彈窗與對話框")
  p(v-for="i of 10" :key="i") {{ i }}
  p(@click="CallDialog") Dialog
</template>

<script setup lang="ts">
import Todo from "@/components/module/todo.vue";
import { OpenDialog } from "@/components/vue-fn/dialog";

const CallDialog = async() => {
  console.log("oo");
  const ans = await OpenDialog();
  console.log("ans:",ans);
};
</script>

<style lang="scss" scoped>
// 佈局
#Dialog {
}
// 組件
#Dialog {
}
</style>
