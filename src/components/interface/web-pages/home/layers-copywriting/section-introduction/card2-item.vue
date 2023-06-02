<template lang="pug">
//- 請填寫功能描述👈
#Card2Item
  .text-area
    p.en-name {{"HARRY TSOU"}}
    p.name {{ "鄒豐懋" }}
    p.job {{"FRONT-END ENGINEER"}}
</template>

<script setup lang="ts">
const InitAction = (scrollTL:  gsap.core.Timeline) => {
  scrollTL.from("#Card2Item > * > .en-name", {x: "-100vw", opacity: 0, duration: 1 });
  scrollTL.from("#Card2Item > * > .name", {y: "100vh", opacity: 0, duration: 1 });
  scrollTL.from("#Card2Item > * > .job", {x: "100vw", opacity: 0, duration: 1 });
};
defineExpose({InitAction});
</script>

<style lang="scss" scoped>
// 佈局
#Card2Item {
  background-color: #76E5B3;
  color: #FFFFFF;
  text-shadow: 10px 9px 2px #00000036;
  @include center;
  @include web-media {
    padding: 40px;
  }
  @include mobile-media {
    padding: 20px;
  }
}
// 組件
#Card2Item {
  .en-name {
    color: #fff;
    font-size: 160px;
    line-height: 127px;
    font-weight: 700px;
    letter-spacing: 14px;
    
    @include phone-media {
      font-size: 90px;
      line-height: 77px;
    }
  }
  .name {
    color: #FFFFFF;
    font-size: 40px;
    letter-spacing: 20px;
    padding-left: 8px;
    
    @include phone-media {
      font-size: 30px;
    }
  }
  .job {
    color: #fff;
    text-align: right;
    font-size: 40px;
    letter-spacing: 10px;
    padding-right: 5px;
    
    @include phone-media {
      padding-top: 40px;
      font-size: 30px;
      line-height: 40px;
    }
  }
}
</style>
