<template lang="pug">
//- 請填寫功能描述👈
#Home
  p 首頁

  p(v-for="i of 100" :key="i") {{ i }}
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
// 佈局
#Home {
}
// 組件
#Home {
}
</style>
