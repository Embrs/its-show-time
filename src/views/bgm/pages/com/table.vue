<template lang="pug">
//- 請填寫功能描述👈
#Table
  .title {{"Table 表格"}}
  .table-area
    AxTable
</template>

<script setup lang="ts">
import AxTable from "@/components/unit/ax-table/index.vue";

// script
</script>

<style lang="scss" scoped>
// 佈局
#Table {
  @include size;
  display: grid;
  grid-template-rows: auto 1fr;
  .title {
    @include font(30px, 700);
    padding: 14px 0 20px 30px;
    color: white;
  }
  .table-area {
    @include size;
    padding: 0 20px 20px 20px;
    // min-width: 800px;
    overflow: hidden;
  }
}
</style>
