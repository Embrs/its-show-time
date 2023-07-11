<template lang="pug">
//- 請填寫功能描述👈
#Dialog
  Todo(text="彈窗與對話框")
  div(ref="container")
</template>

<script setup lang="ts">
import Todo from "@/components/module/todo.vue";
import { render, ref, onMounted, h } from "vue";

// 在onMounted钩子中渲染 vNode
const container = ref();
onMounted(() => {

  // 创建一个vNode
  const vNode = h("div", { class: "red" }, "Hello, Vue 3!");

  // 渲染vNode到容器中
  // 注意：需要将容器元素的引用传递给渲染函数的第二个参数
  // 渲染函数会将vNode渲染到容器中
  const el = document.querySelector("#BgmLayout");
  if (!el) return;
  render(vNode, el);
});
</script>

<style lang="scss" scoped>
// 佈局
#Dialog {
}
// 組件
#Dialog {
}
</style>
