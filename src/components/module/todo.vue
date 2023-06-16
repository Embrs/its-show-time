<template lang="pug">
//- 請填寫功能描述👈
#Todo
  p {{ text }} 未完待續...
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: ""
  }
});
</script>

<style lang="scss" scoped>
// 佈局
#Todo {
  padding: 20px 30px;
  @include font(20px, 700);
  color: #fff
}
// 組件
#Todo {
}
</style>
