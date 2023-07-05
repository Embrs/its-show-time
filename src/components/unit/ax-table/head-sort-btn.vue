<template lang="pug">
//- 請填寫功能描述👈
#HeadSortBtn(@click="emit('on-click')")
  .icon-sort(v-show="!props.isSort")
  .icon-sort-down(v-show="props.isSort && props.sortType === 'down'")
  .icon-sort-up(v-show="props.isSort && props.sortType === 'up'")
</template>

<script setup lang="ts">
const props = defineProps({
  isSort: {
    type: Boolean,
    default: false,
  },
  sortType: {
    type: String as () => "up" | "down",
    default: "down"
  }
});
const emit = defineEmits(["on-click" ]);
</script>

<style lang="scss" scoped>
// 佈局
#HeadSortBtn {
  cursor: pointer;
  @include size(20px);
  @include center;
}
// 組件
#HeadSortBtn {
}
</style>
