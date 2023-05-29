
<template lang="pug">
//- p {{ colorStore.colors }}
slot
</template>
<script setup lang="ts">
// store
import { computed } from "vue";
import { useThemeColorStore } from "@/stores/theme-color";

const colorStore = useThemeColorStore();

const primaryDark = computed(()=> colorStore.GetColor("primary-dark"));
</script>

<style lang="scss">
* {
  --primary-dark: v-bind(primaryDark);
}
</style>
