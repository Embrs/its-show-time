<template lang="pug">
//- 自我介紹
section#SectionIntroduction
  .hand-imgs
    img.bg-cloud(src="@/assets/images/bg/bg-yellow-cloud.jpg")
    img.hand1(src="@/assets/images/png/hand1.png")
    img.hand2(src="@/assets/images/png/hand2.png")
  .level-area.a4
    .star-item
      img.star-img(src="@/assets/images/bg/svg/bg-star.svg")
    //- .card-item
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
import { getCurrentInstance, onMounted } from "vue";

const { proxy } = getCurrentInstance()!;
const { gsap } = proxy!.$gsap;
const El_Card1Item = ref();
const El_Card2Item = ref();
const El_Card3Item = ref();
// -------------------------------------------------------------------------------------------------
onMounted(() => {
  const scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#SectionIntroduction", pin: true, scrub: true, markers: true,
    },
  });

  // time line --------------------------------------------
  El_Card1Item.value.InitAction(scrollTL);
  scrollTL.to(".a1", { duration: 1 });
  scrollTL.fromTo(".a1",
    { xPercent: 0 ,yPercent: 0, scale: 1, rotation: 0, ease: "ease-in", duration: 1 },
    { xPercent: -140 ,yPercent: 10, scale: .7, rotation: -20, ease: "ease-in", duration: 1 }
  );
  //-----
  El_Card2Item.value.InitAction(scrollTL);
  scrollTL.to(".a2", { duration: 1 });
  scrollTL.to(".a2", { xPercent: -140 ,yPercent: -10, scale: .7, rotation: 20, ease: "ease-in", duration: 1});
  //-----
  El_Card3Item.value.InitAction(scrollTL);
  scrollTL.to(".a3", { duration: 1 });
  scrollTL.to(".a3", { xPercent: -140, yPercent: 10, scale: .7, rotation: -20, ease: "ease-in", duration: 1});
  //-----
  scrollTL.fromTo(
    ".a4", 
    {clipPath: "polygon(0% 99.5%, 100% 0%, 100% .5%, 0% 100%)" ,opacity: 0, duration: 1},
    {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", opacity: 1, duration: 1},
  );
  //-----
  scrollTL.to(".hand1", { y:"-50vh", x:"-100vw", duration: 1}, "<");
  scrollTL.to(".hand2", { y:"50vh",  x:"100vw", uration: 1 }, "<");
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
  .star-mask {
    @include size;
    background-image: url(@/assets/images/bg/svg/bg-star.svg);
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
