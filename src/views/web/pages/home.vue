<template lang="pug">
//- 請填寫功能描述👈
#Home
  p 首頁
  p {{ counterStore.count }}
  p {{ counterStore.doubleCount }}
  aButton(@click="counterStore.increment") increment
  aButton(@click="counterStore.doubleCount") doubleCount

  aInput(v-model:value="colorVal")
  aButton(@click="SetColor") SetColor
  pre {{ colorStore.colors }}
  p(v-for="i of 100" :key="i") {{ i }}
</template>

<script setup lang="ts">
import {ref} from "vue";
import { useCounterStore } from "@/stores/counter";
const counterStore = useCounterStore();

import { useThemeColorStore } from "@/stores/theme-color";
const colorStore = useThemeColorStore();
const colorVal = ref("");
const SetColor = () => {
  if (!colorVal.value) return;
  colorStore.SetColor("primaryDark", colorVal.value);
};

</script>

<style lang="scss" scoped>
// 佈局
#Home {
  color: var(--primary-dark);
  font-family: "Noto Sans TC";
  font-size: 20px;
  font-weight: 900;
}
// 組件
#Home {
}
</style>
