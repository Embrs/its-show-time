<template lang="pug">
//- 請填寫功能描述👈
teleport(to="#Layout")
  transition(name="opacity")
    #ColorModal(v-show="visible")
      .drawer-mask(v-show="visible" @click="OnClose")
      transition(name="menu-drawer")
        .content-area(v-show="visible")
          Chrome(v-model="selectColor" )
          .ok-btn(@click.stop="ResolveColor") {{ "SELECT" }}
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Chrome } from "@ckpack/vue-color";

const visible = ref(false);
const selectColor = ref<any>("#fff");
let modalResolve: any;

const Open = (color: string) => {
  return new Promise<void>((resolve) => {
    modalResolve = resolve;
    selectColor.value = color;
    visible.value = true;
  });
};
const OnClose = () => {
  modalResolve({res: "close", color: ""});
  visible.value = false;
};
const ResolveColor = () => {
  let color = selectColor.value?.hex8 ?? selectColor.value;
  color = color.substr(7,2).toUpperCase() === "FF" ? color.substr(0,7): color;
  modalResolve({res: "ok", color});
  visible.value = false;
};
//  -------------------------------------------------------------------------------------------------
defineExpose({ Open });
</script>

<style lang="scss" scoped>
// 佈局
#ColorModal {
  @include fixed("fill");
  @include center;
  z-index: 1000;
}
// 組件
#ColorModal {
  .drawer-mask {
    @include fixed;
    @include size;
    backdrop-filter: blur(1px);
    background-color: rgb(0 0 0 / 24%);
  }
  .content-area {
    // @include absolute("top-right");
    padding: 10px;
    border-radius: 4px;;
    position: absolute;
    background-color: white;
    display: gird;
    letter-spacing: 2px;
  }
  .ok-btn {
    @include btn-click;
    margin-top: 8px;
    background: #26415e;
    color: white;
    padding: 10px;
    text-align: center;
  }
}

.menu-drawer-enter-active,
.menu-drawer-leave-active {
  transition: transform .4s ease, border-radius .4s ease;
}
.menu-drawer-enter-from,
.menu-drawer-leave-to {
  transform: scale(0.8);
  overflow: hidden;

}
</style>
