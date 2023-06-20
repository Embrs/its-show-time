<template lang="pug">
//- 外部 Icon
#Icons
  .title {{ "Icon清單" }}
  //- pre {{ IconList }}
  .icons-list
    .iconitem(v-for="icon of IconList" :key="icon" @click="ClickIcon(icon)")
      .iconimg( :class="icon")
      .iconname {{ icon }}
</template>

<script setup lang="ts">
import {computed} from "vue";
import { CopyString } from "@/plugin/copytext";
import iconFile from "@/assets/styles/scss/global/icon/config.json";
//https://medium.com/mabiloft/we-designed-an-icon-font-with-figma-and-fontello-and-it-has-not-been-a-piece-of-cake-b2948973738e

const IconList = computed(() => {
  return iconFile.glyphs.map(
    (itemObj) => `icon-${itemObj.css}`
  );
});
const ClickIcon = (icon: String) => {
  CopyString(`.${icon}`);
};
</script>

<style lang="scss" scoped>

#Icons {
  padding: 8px;
  .title {
    @include font(30px, 700);
    padding: 20px 10px;
    // font-size: 30px;
    color: white;
  }
  .icons-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .iconitem {
    @include column;
    @include btn-click;
    background: #57968d;
    padding: 4px 8px;
    border-radius: 2px;
    color: white;
  }
  .iconimg {
    font-size: 20px;
  }
  .iconname {
    color: rgb(12, 29, 26);
  }
}
</style>
