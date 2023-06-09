<template lang="pug">
//- 官網 menu 按鈕
#WebMenuBtn
  .menu-box(@click.stop="ClickMenu" )
    .line(:class="{'line1-action': isMenuOpen}")
    .line(:class="{'line2-action': isMenuOpen}")
    .line(:class="{'line3-action': isMenuOpen}")

  MenuDrawer(ref="El_MenuDrawer" @on-change="OnMenuChange")
</template>

<script setup lang="ts">
// script
import MenuDrawer from "./menu-drawer/index.vue";
import { ref } from "vue";
import debounce from "lodash/debounce";

const El_MenuDrawer = ref();
const isMenuOpen = ref(false);

const ClickMenu = debounce(function () {
  isMenuOpen.value = !isMenuOpen.value;
  El_MenuDrawer.value.OpenCtrl( isMenuOpen.value);
}, 400, { leading: true, trailing: false });

const OnMenuChange = (_isMenuOpen: boolean) => {
  console.log("change");
  isMenuOpen.value = _isMenuOpen;
};
</script>

<style lang="scss" scoped>
// 佈局
#WebMenuBtn {
}
// 組件
#WebMenuBtn {
  .menu-box {
    @include size(40px, 30px);
    transform: scale(0.8);
    user-select: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    filter: drop-shadow(0 0 6px rgb(141 141 141 / 58%))
  }
  .line {
    height: 5px;
    width: 40px;
    background-color: #FFFFFF;
    transition: all 0.2s ease;
    border-radius: 10px;
  }
  .line1-action {
    transform-origin: 0 0;
    transform: rotate(31deg) translate(0, 0) scaleX(1.25);
  }
  .line2-action {
    transform-origin: 50% 50%;
    transform: scaleX(0);
    opacity: 0;
  }
  .line3-action {
    transform-origin: 0 5px;
    transform: rotate(-31deg) translate(0, 0) scaleX(1.25);
  }
}
</style>
