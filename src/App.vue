<template lang="pug">
#Layout
  RouterView(v-slot="{ Component }")
    transition(name="page" mode="out-in")
      //- KeepAlive(:include="")
      component(:is="Component") 
</template>

<script setup lang="ts">
// 主題色配置 -------------------------------------------------------------------------------------------------
import { onMounted } from "vue";
import infoLog from "@/utils/console";
// resize -------------------------------------------------------------------------------------------------
import WinSizeFn from "@/components/vue-fn/app/win-resize";
WinSizeFn();
// theme Color -------------------------------------------------------------------------------------------------
import { useThemeColorStore } from "@/stores/theme-color";
const colorStore = useThemeColorStore();
// -------------------------------------------------------------------------------------------------
onMounted(() => {
  infoLog();
});
</script>

<style lang="scss">
#app, #Layout {
  @include size;
}

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
  // -------------------------------------------------------------------------------------------------
  --bgmFont100: v-bind(colorStore.colors.bgmFont100);
  --bgmFont200: v-bind(colorStore.colors.bgmFont200);
  --bgmFont300: v-bind(colorStore.colors.bgmFont300);

  --bgmBg100: v-bind(colorStore.colors.bgmBg100);
  --bgmBg200: v-bind(colorStore.colors.bgmBg200);
  --bgmBg300: v-bind(colorStore.colors.bgmBg300);

  --bgmBorder100: v-bind(colorStore.colors.bgmBorder100);
  --bgmBorder200: v-bind(colorStore.colors.bgmBorder200);
}
</style>
