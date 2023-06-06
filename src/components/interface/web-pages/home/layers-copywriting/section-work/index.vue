<template lang="pug">
//- 作品
section#SectionWork
  .video-box(ref="El_RelitheVideo")
    .box
    video(
      autoplay
      muted
      :loop="true"
      :controls="false"
    )
      source(src="@/assets/videos/relithe.mp4" type="video/mp4")
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import VanillaTilt from "vanilla-tilt";

const El_RelitheVideo = ref();
onMounted(() => {
  VanillaTilt.init(
    El_RelitheVideo.value,
    { reverse: true, max: 30, speed: 1000 }
  );
});


</script>

<style lang="scss" scoped>
// 佈局
#SectionWork {
  padding: 10vh 5vw;
  @include center;
}
// 組件
#SectionWork {
  .video-box {
    width: 360px;
    height: 790px;
    position: relative;
    transform-style: preserve-3d;
    video {
      background-color: 62646c;
      border-radius: 10px;
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
