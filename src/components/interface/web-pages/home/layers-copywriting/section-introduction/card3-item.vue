<template lang="pug">
//- 請填寫功能描述👈
#Card3Item
  .mask-text
    span.text
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted } from "vue";

const { proxy } = getCurrentInstance()!;
const { gsap } = proxy!.$gsap;
// -------------------------------------------------------------------------------------------------


</script>

<style lang="scss" scoped>
// 佈局
#Card3Item {
  background-color: #49B2DF;
  padding: 20px;
  @include center;
  font-weight: 700;
  @include web-media {
    font-size: 170px;
  }
  @include mobile-media {
    font-size: 80px;
  }
}
// 組件
#Card3Item {
  .mask-text {
    background: url(@/assets/svg/bg-star.svg);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: cover;
  }
}
</style>
