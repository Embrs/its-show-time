<template lang="pug">
RouterView
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

// 主題色配置 ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
import { useThemeColorStore } from "@/stores/theme-color";
const colorStore = useThemeColorStore();
</script>

<style lang="scss">
@import "@/assets/styles/scss/_scroll.scss"; // scroll 樣式

* /*主題色注入*/{
  --fontPrimary: v-bind(colorStore.colors.fontPrimary);
  --fontSecondary: v-bind(colorStore.colors.fontSecondary);
  --fontDisabled: v-bind(colorStore.colors.fontDisabled);
  --bgPrimary: v-bind(colorStore.colors.bgPrimary);
  --bgSecondary: v-bind(colorStore.colors.bgSecondary);
  --bgDisabled: v-bind(colorStore.colors.bgDisabled);
  --processing: v-bind(colorStore.colors.processing);
  --success: v-bind(colorStore.colors.success);
  --warning: v-bind(colorStore.colors.warning);
  --error: v-bind(colorStore.colors.error);
}
</style>
