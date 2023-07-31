<template lang="pug">
//- 請填寫功能描述👈
#BB
  Todo(text="Env 測試用")
  p BASE_URL: {{ baseUrl }}
  p MODE: {{ mode }}
  p PROD: {{ prod }}
  p DEV: {{ dev }}
  p SSR: {{ ssr }}
  p {{ appUrl }}
  p {{ aaa }}
</template>

<script setup lang="ts">
import Todo from "@/components/module/todo.vue";
const baseUrl = import.meta.env.BASE_URL;
const mode = import.meta.env.MODE;
const prod = import.meta.env.PROD;
const dev = import.meta.env.DEV;
const ssr = import.meta.env.SSR;
// const mode = import.meta.env.VITE_MODE;
const appUrl = import.meta.env.VITE_APP_URL;
const aaa = import.meta.env;

</script>

<style lang="scss" scoped>
// 佈局
#BB {
  color: #fff;
}
// 組件
#BB {
}
</style>
