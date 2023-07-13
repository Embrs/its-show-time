<template lang="pug">
//- 請填寫功能描述👈
#Dialog
  Todo(text="彈窗與對話框")
  aButton(@click="DialogDemo") {{ "vNode Dialog" }}
</template>

<script setup lang="ts">
import Todo from "@/components/module/todo.vue";
import { OpenDialog } from "@/components/vue-fn/dialog";

const DialogDemo = async() => {
  const ans = await OpenDialog({
    content: "這是 vNode Dialog 測試"
  });
  console.log("ans:",ans);
};
</script>

<style lang="scss" scoped>
// 佈局
#Dialog {
  padding: 10px;
}
// 組件
#Dialog {
}
</style>
