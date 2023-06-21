<template lang="pug">
//- 主題色
#ThemeColors
  .title {{ "主題色設定" }}
  .color-list
    .color-item( v-for="colorKey of Object.keys(colorStore.colors)" :key="colorKey" )
      .color-box(
        :style="`background-color: ${colorStore.colors[colorKey]}`"
        @click="SelectColor(colorKey, colorStore.colors[colorKey])"
      )
      .color-num {{ colorStore.colors[colorKey] }}
      .color-key {{ colorKey }}
  .color-picker
  ColorModal(ref="El_ColorModal")
</template>

<script setup lang="ts">
import {ref} from "vue";
import ColorModal from "@/components/unit/color-model/index.vue";
import { useThemeColorStore } from "@/stores/theme-color";
const colorStore = useThemeColorStore();

const El_ColorModal = ref();

const SelectColor = async (colorKey: string, _color: string) => {
  const {res, color} = await El_ColorModal.value.Open(_color);
  if (res === "ok") {
    colorStore.SetColor(colorKey, color);
  }
};
// script
</script>

<style lang="scss" scoped>
#ThemeColors {
  .color-picker {
    width: 300px;
  }
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
    cursor: pointer;
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
