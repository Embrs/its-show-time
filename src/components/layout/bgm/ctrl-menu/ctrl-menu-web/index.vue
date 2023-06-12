<template lang="pug">
//- 網頁版 meniu
#CtrlMenuWeb
  .member-info-area
    .zoom-btn 
      shrink-outlined
    .member-img
      img(src="@/assets/images/bgm/member.png")
    .member-name Member name
  .gap-line
  .menu-area
    p ajhlkfjahsdfasj;lajsd;flkjas
</template>

<script setup lang="ts">
import { ShrinkOutlined } from "@ant-design/icons-vue";
// script
</script>

<style lang="scss" scoped>
// 佈局
#CtrlMenuWeb {
  height: 100vh;
  background-color: #0F1116;
  .member-info-area {
    @include column;
    position: relative;
    padding: 20px;
  }
  .menu-area {
    padding: 10px;
  }
}
// 組件
#CtrlMenuWeb {
  .zoom-btn {
    @include size(20px);
    @include absolute("top-left", 10px);
    @include center;
    @include btn-click;
    // font-size: 20px;
    background-color: #72C0B8;
    color: #fff;
  }
  .member-img {
    @include size(100px);
    border-radius: 30px;
    background-color: #666;
    overflow: hidden;
    border: 3px solid #72C0B8;
    img {
      @include size;
      @include img-lock;
      object-fit: cover;
    }
  }
  .member-name {
    color: #72C0B8;
  }
  .gap-line {
    border-bottom: 1px solid #72C0B8;
    margin: 0 20px;
  }
}
</style>
