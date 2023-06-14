<template lang="pug">
//- 網頁版 meniu
#CtrlMenuWeb(:class="{'mobile-type': isMobileType}")
  .member-info-area(:class="{'member-info-area-mini': isMini}")
    .zoom-btn(@click="ClickZoomBtn")
      .bnticon(v-if="isMobileType" class="icon-cancel" )
      .bnticon(v-else :class="isMini ? 'icon-resize-full' : 'icon-resize-small'")
    .member-img(:class="{'member-img-mini': isMini}")
      img(src="@/assets/images/bgm/member.png")
    .member-name(v-show="!isMini") {{"Member name"}}
  .gap-line(:class="{'gap-line-mini': isMini}")
  //----------------
  .menu-list-area(:class="{'menu-list-area-mini': isMini}")
    BgmMenuList(:isMini="isMini" :menuList="props.menuList")
  //----------------  
  .menu-footer
    .logout-area
      .logout-btn(@click="ClickLogout")
        .icon-logout
        transition(name="com" mode="out-in")
          p(v-if="!isMini") {{ "Logout" }}
    transition(name="com" mode="out-in")
      .copy-right(v-show="!isMini") {{ "© 2023 EMBRS" }}
</template>

<script setup lang="ts">
import { ref } from "vue";
import BgmMenuList from "./bgm-menu-list.vue";
import type { MenuItem } from "@/stores/bgm-menu";

const props = defineProps({
  menuList: {
    type: Array as () => MenuItem[],
    default: () => ([])
  },
  isMobileType: {
    type: Boolean,
    default: false
  }
});
const isMini = ref(false);

//  -------------------------------------------------------------------------------------------------
import { useRouter } from "vue-router";
const $router = useRouter();
//  -------------------------------------------------------------------------------------------------
const emit = defineEmits(["on-close"]);
const EmitClose = () => {
  emit("on-close");
};

// 縮放 menu
const ClickZoomBtn = () => {
  if (props.isMobileType) {
    EmitClose();
    return;
  }
  isMini.value = !isMini.value;
};

const ClickLogout = () => {
  $router.push("/bgm-login");
};
// script
</script>

<style lang="scss" scoped>
// 佈局
#CtrlMenuWeb {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  height: 100vh;
  background-color: var(--bgmBg200);
  border-right: 1px solid var(--bgmBorder100);
  color: var(--bgmFont200);
  .member-info-area {
    @include column;
    position: relative;
    padding: 20px;
    width: 180px;
    transition: width 0.4s ease, padding 0.4s ease;
    &-mini {
      padding: 40px 5px 10px 5px;
      width: 40px;
      overflow: hidden
    }
  }
  .menu-list-area {
    padding: 0 20px;
    transition: padding 0.4s ease;
    &-mini {
      padding: 0 0;
    }
  }
  .logout-area {
    @include center;
  };
}

// 組件
#CtrlMenuWeb {
  .zoom-btn {
    @include size(20px);
    @include absolute("top-left", 10px);
    @include center;
    @include btn-click;
    border-radius: 4px;;
    background-color: var(--bgmBg300);
    color: var(--bgmFont200);;
  }
  .member-img {
    @include size(100px);
    border-radius: 30px;
    overflow: hidden;
    border: 3px solid var(--bgmBorder100);
    img {
      @include size;
      @include img-lock;
      object-fit: cover;
    }
    transition: height 0.4s ease, width 0.4s ease, border-width 0.4s ease, border-radius 0.4s ease;
    &-mini {
      @include size(20px);
      border-width: 1px;
      border-radius: 4px;
    }
  }
  .member-name {
    color: var(--bgmFont100);
  }
  .gap-line {
    border-bottom: 1px solid var(--bgmBorder100);
    margin: 0 20px;
    transition: margin 0.4s ease;
    &-mini {
      margin: 0 8px;
    }
  }
  .logout-btn {
    @include flex;
    @include btn-click;
    cursor: pointer;

    gap: 5px;
    .icon-logout {
      font-size: 20px;
    }
  };
  .copy-right {
    padding: 5px 0;
    font-size: 12px;
    text-align: center;
  }
}
.mobile-type {
  border-right: 0px solid var(--bgmBorder100) !important;
  border-left: 1px solid var(--bgmBorder100);
  .member-info-area{
    width: 250px !important;
  }
  .zoom-btn {
    // @include absolute("top-right", 10px);
    right: 10px !important;
    left: unset !important;
  }
}
</style>
