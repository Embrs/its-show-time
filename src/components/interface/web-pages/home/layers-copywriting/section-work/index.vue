<template lang="pug">
//- 作品
section#SectionWork
  .video-box(ref="El_RelitheVideo")
    .box
    //- autoplay
    video(
      ref="El_Video"
      muted
      controlslist="nodownload"
      :loop="true"
      :controls="false"
    )
      source(src="@/assets/videos/relithe.mp4" type="video/mp4")
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from "vue";
import VanillaTilt from "vanilla-tilt";

const { proxy } = getCurrentInstance()!;
const { ScrollTrigger } = proxy!.$gsap;

const El_RelitheVideo = ref();
const El_Video = ref();
onMounted(() => {
  VanillaTilt.init(
    El_RelitheVideo.value,
    { max: 30, speed: 1000 }
  );
  //----------------------------
  ScrollTrigger.create({
    trigger: El_RelitheVideo.value,
    markers: false,
		// 向下滾動進入start點時觸發callback
    onEnter: () => { El_Video.value.play();},
		// 向下滾動超過end點時觸發callback
    onLeave: () => { El_Video.value.pause();}, 
		// 向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: () => { El_Video.value.play();},
    onLeaveBack: () => {El_Video.value.pause();}
  });
});


</script>

<style lang="scss" scoped>
// 佈局
#SectionWork {
  padding: 10vh 10vw;
  @include center;
}
// 組件
#SectionWork {
  .video-box {
    width: 340px;
    position: relative;
    transform-style: preserve-3d;
    video {
      background-color: 62646c;
      border-radius: 14px;
      overflow: hidden;
      position: relative;
      z-index: 1;
      transform: translateZ(10px);
      width: 100%;
      outline: 2px solid #f7f7f7;
    }
    .box {
      position:absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #62646c;
      outline: 15px solid #62646c;
      box-shadow: 14px 15px 11px 6px #00000070;
      overflow: hidden;
      border-radius: 10px;
    }
  }
}
</style>
