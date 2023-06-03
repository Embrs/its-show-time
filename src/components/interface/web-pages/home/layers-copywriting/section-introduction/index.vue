<template lang="pug">
//- 自我介紹
section#SectionIntroduction

  .level-area.a4
    Card4Item(ref="El_Card4Item")
  .level-area.a3
    Card3Item.card-item(ref="El_Card3Item")
  .level-area.a2
    Card2Item.card-item(ref="El_Card2Item")
  .level-area.a1
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
const El_Card1Item = ref();
const El_Card2Item = ref();
const El_Card3Item = ref();
const El_Card4Item = ref();
// -------------------------------------------------------------------------------------------------
onMounted(() => {
  const scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#SectionIntroduction", pin: true, scrub: true, markers: true,
    },
  });
  // time line --------------------------------------------
  scrollTL.to(".a1", {
    duration: 1,
    onStart: () => { El_Card1Item.value.StartAction(); },
    onComplete: () => { El_Card1Item.value.CardLeave(); }
  });
  //-----
  scrollTL.to(".a2", { 
    duration: 2,
    onReverseComplete: () => { El_Card1Item.value.CardBack();},
    onStart: () => { El_Card2Item.value.StartAction(); },
    onComplete: () => { El_Card2Item.value.CardLeave(); }
  });
  //-----
  scrollTL.to(".a3", {
    duration: 2,
    onReverseComplete: () => { El_Card2Item.value.CardBack(); },
    onStart: () => { El_Card3Item.value.StartAction(); },
    onComplete: () => { El_Card3Item.value.CardLeave(); }
  });
  //-----
  scrollTL.to(".a4", {
    duration: 2,
    onReverseComplete: () => {
      El_Card3Item.value.CardBack();
      El_Card4Item.value.InitAction();
    },
    onStart: () => { El_Card4Item.value.StartAction();},
  });
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

  .star-img {
    @include size;
    display: block;
    object-fit: cover;
    object-position: bottom; 
  }
  .star-item {
    @include size;
  }
  .hand-imgs {
    @include size;
    position: relative;
    .bg-cloud {
      @include size;
      object-fit: cover;
    }
    .hand1 {
      position: absolute;
      transform: rotate(50deg);
      // filter: opacity(.7);

      @include web-media {
        height: 35vh;
        right: 50vw ;
      }
      @include mobile-media {
        height: 25vh;
        right: 40vw ;
        top: 20vh;
      }
    }
    .hand2 {
      position: absolute;
      bottom: -20vh;
      transform: rotate(70deg);
      // filter: opacity(.7);
      @include web-media {
        height: 65vh;
        left: 50vw;
        bottom: -20vh;
      }
      @include mobile-media {
        height: 50vh;
        left: 50vw;
        bottom: 0;
      }
    }
  }
}
// -------------------------------------------------------------------------------------------------
@for $i from 0 through 5 {
  .z-#{$i * 10} {
    z-index: #{$i * 10};
  }
}
</style>
