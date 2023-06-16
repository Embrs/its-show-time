<template lang="pug">
//- 請填寫功能描述👈
teleport(to="body")
  transition(name="opacity")
    #MenuDrawer(v-show="visible")
      .drawer-mask(v-show="visible" @click="ClickMask")
      transition(name="menu-drawer")
        menu.menu-list(v-show="visible")
          .menu-item(
            v-for="menuItem of menuList" :key="menuItem.path"
            @click="ToPaht(menuItem.path)"
          )
            p {{ menuItem.label }}
          .ps {{"... Continuously updating"}}
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import debounce from "lodash/debounce";

const $router = useRouter();
const visible = ref(false);
const menuList = ref([
  { path: "/", label: "INTRODUCE" },
  { path: "/bgm-login", label: "MANAGEMENT SYSTEM" }
]);
//  -------------------------------------------------------------------------------------------------
const emit = defineEmits(["on-change"]);
const EmitChange = () => {
  emit("on-change", visible.value);
};

onBeforeUnmount(() => {
  ToggleHtmlScrollbar(false);
});
//  -------------------------------------------------------------------------------------------------
// 開關控制
const OpenCtrl = (isOpen: boolean) => {
  visible.value = isOpen;
  // ToggleHtmlScrollbar(visible.value);
  EmitChange();
};

// 點擊遮罩
const ClickMask = debounce(function () {
  OpenCtrl(false);
}, 400, { leading: true, trailing: false });

// 前往頁面
const ToPaht = debounce(function (path: string) {
  $router.push(path);
  OpenCtrl(false);
}, 400, { leading: true, trailing: false });

// 滾動條隱藏
const ToggleHtmlScrollbar = (canHide: boolean) => {
  const html = document.querySelector("html") as HTMLHtmlElement;
  if (canHide) {
    html.style.overflow = "hidden";
  } else {
    html.style.removeProperty("overflow");
  }
};

defineExpose({ OpenCtrl });
</script>

<style lang="scss" scoped>
// 佈局
#MenuDrawer {
  @include absolute("fill");
  // position: absolute;
  // top: 0;
  @include size(100vw, 100vh);
}
// 組件
#MenuDrawer {
  // position: relative;
  .drawer-mask {
    @include fixed;
    @include size;
    backdrop-filter: blur(1px);
    background-color: rgb(0 0 0 / 24%);
  }
  .menu-list {
    @include fixed("bottom-right");
    height: calc(100vh - 90px);
    width: calc(100vw - 20px);
    overflow: hidden;
    border-radius: 20px 0 0 20px;
    padding: 30px 0;
    bottom: 20px;
    max-width: 500px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .menu-item {
    position: relative;
    width: 100%;
    cursor: pointer;
    user-select: none;
    padding: 15px 0;
    transition: transform 0.2s ease;
    p {
      @include font(24px, 700);
      position: relative;
      z-index: 1;
      color: #7A7C8E;
      text-align: center;
      transition: color 0.3s ease;
    }
    &::before {
      content: " ";
      @include absolute;
      height: 100%;
      width: 100%;
      border-radius: 100px;
      transform: scale(0);
      background-color: #7A7C8E;
      opacity: 0;
      transition: all 0.3s ease;
    }
    &:hover {
      &::before {
        transform: scale(1);
        border-radius: 0;
        opacity: 1;
        background-color: #A2A2A2;
      }
      p {
        color: #ffffff;
      }
    }
    &:active {
      transform: scaleY(0.8);
    }
  }
  .ps {
    @include font(14px);
    color: #c3c3c3;
    text-align: center;
    padding: 20px 0;
  }
}
//  -------------------------------------------------------------------------------------------------

// drawer transition
.menu-drawer-enter-active,
.menu-drawer-leave-active {
  transition: transform .4s ease, border-radius .4s ease;
}
.menu-drawer-enter-from,
.menu-drawer-leave-to {
  transform: translateX(500px);
  border-radius: 100% 0 0 100% !important;

}
</style>
