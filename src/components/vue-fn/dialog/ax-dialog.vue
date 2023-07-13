<template lang="pug">
//- 請填寫功能描述👈
#AxDialog 
  transition(name="opacity")
    .dialog-mask(v-show="visible" @click="ClickMaskClose")
  transition(name="ax-dialog")
    .dialog-box(v-show="visible")
      .content-area
        p {{ props.content }}
      .btns-area
        .cancel-btn(
          v-if="props.showCancelButton"
          @click="ClickEventBtn('cancel')"
        ) {{ props.cancelText }}
        .ok-btn(
          v-if="props.showOkButton"
          @click="ClickEventBtn('ok')"
        ) {{ props.okText }}
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import debounce from "lodash/debounce";

const props = defineProps({
  content: { type: String, default: "請設定 content 文字" },
  okText: { type: String, default: "確定" },
  cancelText: { type: String, default: "取消" },
  showOkButton: { type: Boolean, default: true },
  showCancelButton: { type: Boolean, default: true },
  maskCanClose: { type: Boolean, default: true },
  OnClose: { type: Function },
  OnOk: { type: Function },
  OnCancel: { type: Function }
});
const visible = ref(false);

// -------------------------------------------------------------------------------------------------
onMounted(() => {
  visible.value = true;
});
// -------------------------------------------------------------------------------------------------
type EventType = "ok"| "close"| "cancel";
// 點擊遮罩關閉
const ClickMaskClose = () => {
  if (!props.maskCanClose) return;
  ClickEventBtn("close");
};
// 點擊事件按鈕
const ClickEventBtn = debounce((eventType: EventType) => {
  visible.value = false;
  setTimeout(() => {    
    switch (eventType) {
      case "close": if (props.OnClose) props.OnClose(); return;
      case "ok": if (props.OnOk) props.OnOk(); return;
      case "cancel": if (props.OnCancel) props.OnCancel(); return;
      default: break;  
    }
  }, 400);
}, 400, { leading: true, trailing: false });

</script>

<style lang="scss" scoped>
// 佈局
#AxDialog  {
  @include size;
  @include center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  .dialog-box {
    padding: 0px 10px 8px 10px;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "content"
      "btn";
    .content-area {
      grid-area: content;
      padding: 14px 10px;
      @include font(14px);
    }
    .btns-area {
      grid-area: btn;
      width: 100%;
      display: grid;
      grid-auto-columns: auto;
      grid-auto-flow: column dense;
      gap: 10px;
    }
  }
}

// 組件
#AxDialog  {
  .dialog-mask {
    @include fixed;
    @include size;
    backdrop-filter: blur(1px);
    background-color: rgb(0 0 0 / 24%);
  }
  .dialog-box {
    min-width: 200px;
    min-height: 50px;
    background-color: #fff;
    z-index: 1;
    border-radius: 4px;
  }
  .btn-basic {
    @include font(12px);
    @include center;
    @include btn-click;
    padding: 6px;
    border-radius: 4px; 
  }
  .cancel-btn {
    @extend .btn-basic;
    color: #fff;
    background-color: #E17672;
    box-sizing: border-box;
  }
  .ok-btn {
    @extend .btn-basic;
    color: #fff;
    background-color: #26abd0;
  }
}

.ax-dialog-enter-active,
.ax-dialog-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.ax-dialog-enter-from,
.ax-dialog-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
</style>
