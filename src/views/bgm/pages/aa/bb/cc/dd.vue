<template lang="pug">
//- 請填寫功能描述👈
#BB
  Todo(text="測試用")
  p {{ mode }}
  p {{ appUrl }}
</template>

<script setup lang="ts">
import Todo from "@/components/module/todo.vue";
import {ref} from "vue";
const mode = ref(import.meta.env.VITE_MODE);
const appUrl = ref(import.meta.env.VITE_APP_URL);
console.log("env", import.meta.env.VITE_APP_URL);

</script>

<style lang="scss" scoped>
// 佈局
#BB {
}
// 組件
#BB {
}
</style>
