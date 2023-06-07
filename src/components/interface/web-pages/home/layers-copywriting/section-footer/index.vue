<template lang="pug">
//- 請填寫功能描述👈
#SectionFooter
  img.bg(src="@/assets/images/bg/svg/bg-cloud.svg")
  .info-area
    .info-items
      .item
        a(href="https://github.com/Embrs" target="_blank" title="Embrs github")
          img.github(src="@/assets/images/png/GitHub-logo.png") 
    .copy-right {{ "Copyright © 2023 EMBRS" }}
</template>

<script setup lang="ts">
// import { ref } from "vue";
// import _waveBg from "@/assets/images/bg/svg/bg-wave.svg";
// const waveBg = ref(_waveBg);

// script
</script>

<style lang="scss" scoped>
// 佈局
#SectionFooter {
  position: relative;
  height: 50vh;
  width: 100vw;
  .info-area {
    padding-top: 20vh;
    @include center;
  }
}
// 組件
#SectionFooter {
  .bg {
    @include size;
    height: 50vh;
    width: 100vw;
    position: absolute;
    object-fit: cover;
    object-position: top;
    z-index: 0;
  }
  .info-area {
    position: relative;
    @include size;
    z-index: 1;
    display: grid;
    grid-template-rows: 1fr auto;
  }
  .copy-right {
    padding: 20px;
    @include font(16px);
    color: white;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  .info-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  .item {
    @include size(100px);
    img {
      opacity: 0.6;
      @include size;
      object-fit: contain;
      mix-blend-mode: luminosity;
      user-select: none;
      cursor: pointer;
      transition: transform 0.2s ease, opacity 0.2s ease;
      &:hover {
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }
}
</style>
