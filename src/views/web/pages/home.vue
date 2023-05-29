<template lang="pug">
//- 請填寫功能描述👈
#home
  p 首頁
  p {{ counter.count }}
  p {{ counter.doubleCount }}
  aButton(@click="counter.increment") increment
  aButton(@click="counter.doubleCount") doubleCount

  p(v-for="i of 100" :key="i") {{ i }}
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();

</script>

<style lang="scss" scoped>
// 佈局
#home {
  font-family: "Noto Sans TC";
  font-size: 20px;
  font-weight: 900;
}
// 組件
#home {
}
</style>
