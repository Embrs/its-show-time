<template lang="pug">
//- 主題色
#ThemeColors
  .title {{ "主題色設定" }}
  .color-list
    .color-item( v-for="colorKey of Object.keys(colorStore.colors)" :key="colorKey" )
      .color-box(:style="`background-color: ${colorStore.colors[colorKey]}`")
      .color-num {{ colorStore.colors[colorKey] }}
      .color-key {{ colorKey }}
</template>

<script setup lang="ts">
import { useThemeColorStore } from "@/stores/theme-color";
const colorStore = useThemeColorStore();


// script
</script>

<style lang="scss" scoped>
#ThemeColors {
  padding: 8px;
  .title {
    @include font(30px, 700);
    padding: 14px 0 20px 30px;
    color: white;
  }
  .color-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .color-box {
    height: 30px;
    border: 1px solid rgb(52, 55, 61);
    border-radius: 4px;
    overflow: auto;
  }
  .color-item {
    text-align: center;
    background-color: #57968d;
    padding: 8px;
    border-radius: 2px;
    overflow: auto;
  }
  .color-num {
  }
  .color-key {
  }
}
</style>
