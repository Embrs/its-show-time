<template lang="pug">
//- 請填寫功能描述👈
#Card4Item(ref="El_Card")
  .hand-imgs
    img.bg-cloud(src="@/assets/images/bg/bg-yellow-cloud.jpg" loading="lazy")
    img.hand1(ref="El_Hand1" src="@/assets/images/png/hand1.png" loading="lazy")
    img.hand2(ref="El_Hand2" src="@/assets/images/png/hand2.png" loading="lazy")

  .star-item(ref="El_Star")
    img.star-img(src="@/assets/images/bg/svg/bg-star.svg" loading="lazy")
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from "vue";
const { proxy } = getCurrentInstance()!;
const { gsap } = proxy!.$gsap;

const El_Hand1 = ref();
const El_Hand2 = ref();
const El_Star = ref();

let StarAction: gsap.core.Tween;
let Hand1Action: gsap.core.Tween;
let Hand2Action: gsap.core.Tween;
onMounted( () => {
  StarAction = gsap.fromTo(
    El_Star.value,
    {clipPath: "polygon(0% 99.5%, 100% 0%, 100% .5%, 0% 100%)" ,opacity: 0, duration: 1, paused: true},
    {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", opacity: 1, duration: 1, delay: 1, paused: true },
  );
  Hand1Action = gsap.to(El_Hand1.value, { yPercent:-50, xPercent: -150, duration: 1, delay: 1, paused: true });
  Hand2Action = gsap.to(El_Hand2.value, { yPercent:50, xPercent: 150, duration: 1, delay: 1, paused: true });
});

const InitAction = () => {
  StarAction.reverse();
  Hand1Action.reverse();
  Hand2Action.reverse();
};

const CardEnter = () => {
  StarAction.play();
  Hand1Action.play();
  Hand2Action.play();
};

const CardLeave = () => {
  InitAction();
};

defineExpose({ InitAction, CardEnter, CardLeave});
</script>

<style lang="scss" scoped>
// 佈局
#Card4Item {

}
// 組件
#Card4Item {
  position: relative;
  .hand-imgs {
    width: 100vw;
    height: 100vh;
    position: relative;
    .bg-cloud {
      @include size;
      object-fit: cover;
    }
    .hand1 {
      position: absolute;
      transform: rotate(50deg);
      
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
  .star-item {
    position: absolute;
    top: 0;
    left: 0;
    .star-img {
      width: 100vw;
      height: 100vh;
      display: block;
      object-fit: cover;
      object-position: bottom; 
    }
  }
}

</style>
