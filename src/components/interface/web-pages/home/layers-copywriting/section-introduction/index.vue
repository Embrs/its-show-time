<template lang="pug">
//- 自我介紹
section#SectionIntroduction(ref="El_SectionIntroduction")

  .level-area
    Card4Item(ref="El_Card4Item")
  .level-area
    Card3Item.card-item(ref="El_Card3Item")
  .level-area
    Card2Item.card-item(ref="El_Card2Item")
  .level-area
    Card1Item.card-item(ref="El_Card1Item")
</template>

<script setup lang="ts">
import { ref } from "vue"; 
import Card1Item from "./card1-item.vue";
import Card2Item from "./card2-item.vue";
import Card3Item from "./card3-item.vue";
import Card4Item from "./card4-item.vue";

import { getCurrentInstance, onMounted } from "vue";

const { proxy } = getCurrentInstance()!;
const { gsap } = proxy!.$gsap;

const El_SectionIntroduction = ref();
const El_Card1Item = ref();
const El_Card2Item = ref();
const El_Card3Item = ref();
const El_Card4Item = ref();
// -------------------------------------------------------------------------------------------------
onMounted(() => {
  const scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: El_SectionIntroduction.value, pin: true, scrub: true, markers: true,
    },
  });
  // time line --------------------------------------------
  scrollTL.to(
    El_Card1Item.value,
    {
      duration: 1,
      onStart: () => { El_Card1Item.value.CardEnter(); },
      onComplete: () => { El_Card1Item.value.CardLeave(); }
    }
  );
  //-----
  scrollTL.to(
    El_Card2Item.value,
    { 
      duration: 1,
      onReverseComplete: () => { El_Card1Item.value.CardEnter();},
      onStart: () => { El_Card2Item.value.CardEnter(); },
      onComplete: () => { El_Card2Item.value.CardLeave(); }
    }
  );
  //-----
  scrollTL.to(
    El_Card3Item.value,
    {
      duration: 1,
      onReverseComplete: () => { El_Card2Item.value.CardEnter(); },
      onStart: () => { El_Card3Item.value.CardEnter(); },
      onComplete: () => { El_Card3Item.value.CardLeave(); }
    }
  );
  //-----
  scrollTL.to(
    El_Card4Item.value,
    {
      duration: 1,
      onReverseComplete: () => {
        El_Card3Item.value.CardEnter();
        El_Card4Item.value.CardLeave();
      },
      onStart: () => { El_Card4Item.value.CardEnter();},
    }
  );
  scrollTL.to(
    El_Card4Item.value,
    {
      duration: 1,
    }
  );
});
</script>

<style lang="scss" scoped>
// 佈局
#SectionIntroduction {
  position: relative;
  height: 100vh;
  width: 100vw;;
  overflow: hidden;
  .level-area {
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    top: 0;
    left: 0;
  }
}
// 組件 
#SectionIntroduction {
  .card-item {
    @include size;
    box-shadow: 73px 57px 0px -17px #0000003d;
  }
}
// -------------------------------------------------------------------------------------------------
// @for $i from 0 through 5 {
//   .z-#{$i * 10} {
//     z-index: #{$i * 10};
//   }
// }
</style>
