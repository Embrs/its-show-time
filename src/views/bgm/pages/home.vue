<template lang="pug">
//- 請填寫功能描述👈
#BgmHome
  ChartBasic.line-area(ref="El_Line" :chartOption="demoData.chartLine")
  ChartBasic.pie-area(ref="El_Pie" :chartOption="demoData.chartPie")
  ChartBasic.series-area(ref="El_Series" :chartOption="demoData.chartSeries")
  ChartBasic.gauge-area(ref="El_Gauge" :chartOption="demoData.chartGauge")
  ChartBasic.line2-area(ref="El_Line2" :chartOption="demoData.chartLine2")
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"; 
import ChartBasic from "@/components/interface/bgm-pages/home/chart-basic.vue";
import demoData from "@/components/interface/bgm-pages/home/chat-demo-data";

const El_Line = ref();
const El_Pie = ref();
const El_Series = ref();
const El_Gauge = ref();
const El_Line2 = ref();
// -------------------------------------------------------------------------------------------------
onMounted(() => {
  window.addEventListener("resize", ChatResize);
});

onBeforeUnmount(()=> {
  window.removeEventListener("resize", ChatResize);
});
// -------------------------------------------------------------------------------------------------
const ChatResize = () => {
  El_Line.value.Resize();
  El_Pie.value.Resize();
  El_Series.value.Resize();
  El_Gauge.value.Resize();
  El_Line2.value.Resize();
};
</script>

<style lang="scss" scoped>
// 佈局
#BgmHome {
  padding: 10px;
  display: grid;
  gap: 10px;
  @include pc-media {
    @include size;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "line line line pie"
      "series gauge line2 line2";
    .line-area { grid-area: line ; }
    .pie-area { grid-area: pie ; }
    .series-area { grid-area: series ; }
    .gauge-area { grid-area: gauge ; }
    .line2-area { grid-area: line2 ; }
  }
  @include mobile-media {
    grid-template-rows: repeat(5, 400px);
  }
}
// 組件
#BgmHome {
}
</style>
