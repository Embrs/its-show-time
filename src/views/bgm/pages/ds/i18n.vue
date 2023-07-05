<template lang="pug">
//- 多語系
#I18n
  .title {{ "I18n" }}
  .btns-row
    aButton(@click="ClickLangBtn('en-US')") En
    aButton(@click="ClickLangBtn('zh-TW')") 中文
  .text-area {{ $t("i18n.ex") }}
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const ClickLangBtn = (lang: "en-US" | "zh-TW") => {
  locale.value = lang;
};
</script>

<style lang="scss" scoped>
#I18n {
  padding: 8px;
  .title {
    @include font(30px, 700);
    padding: 14px 0 20px 30px;
    color: white;
  }
  .btns-row {
    display: flex;
    gap: 10px;
    padding: 20px;
    padding-top: 0;
  }
  .text-area {
    @include text-break;
    background-color: #fff;
    border-radius: 8px;
    padding: 0 30px;
    line-height: 40px;;

  }

}
</style>
