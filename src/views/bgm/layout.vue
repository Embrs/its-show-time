<template lang="pug">
//- 請填寫功能描述👈
#bgm-layout
  p bgm-layout
  a-button(@click="ToPagePath('/')") web
  nav.row 
    RouterLink(to="/bgm") origin 
    RouterLink(to="/bgm/member") member
    RouterLink(to="/bgm/member/123123") member info
    RouterLink(to="/bgm/staff") staff
  RouterView
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter(); // 路由
// 跳轉 path
const ToPagePath = (path: string) => {
  if (path.length) {
    router.push({ path });
  }
};
</script>

<style lang="scss" scoped>
// 佈局
#bgm-layout {
}
// 組件
#bgm-layout {
  .row {
    display: flex;
    gap: 10px;
  }
}
</style>
