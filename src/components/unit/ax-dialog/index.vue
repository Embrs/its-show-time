<template lang="pug">
//- 請填寫功能描述👈
#AxDialog 
  p AxDialog //TODO
  p(@click="props.OnClose") Close
  p {{ props.aa }}
  p(@click="props.OnOk") OK
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";
const props = defineProps({
  aa: {
    type: String,
    default: ""
  },
  OnClose: {
    type: Function
  },
  OnOk: {
    type: Function
  }
});
onMounted(() => {
  console.log("onMounted");
});
onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});
</script>

<style lang="scss" scoped>
// 佈局
#AxDialog  {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--bgmBorder100);
}
// 組件
#AxDialog  {
}
</style>
