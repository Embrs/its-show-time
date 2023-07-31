<template lang="pug">
//- 請填寫功能描述👈
#BB
  Todo(text="Env 測試用")
  p {{ nodeTEst }}
  p {{ mode }}
  p {{ appUrl }}
</template>

<script setup lang="ts">
import Todo from "@/components/module/todo.vue";
const nodeTEst = import.meta.env.NODE_ENV_TEST;
const mode = import.meta.env.VITE_MODE;
const appUrl = import.meta.env.VITE_APP_URL;

</script>

<style lang="scss" scoped>
// 佈局
#BB {
}
// 組件
#BB {
}
</style>
