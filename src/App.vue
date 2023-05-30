<template lang="pug">
RouterView
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterView } from "vue-router";
import { useThemeColorStore } from "@/stores/theme-color";
const colorStore = useThemeColorStore();

</script>

<style lang="scss">
@import "@/assets/styles/scss/_scroll.scss"; // scroll 樣式

* /*ThemeColor*/{
  --primary-dark: v-bind(colorStore.colors.primaryDark);
}

</style>
