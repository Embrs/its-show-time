<template lang="pug">
//- 請填寫功能描述👈
#ChartBasic
  .chart-card(:style="cardStyle")
    .chart-Item(ref="El_ChartItem")
</template>

<script setup lang="ts">
import { shallowRef,ref, computed, onMounted, getCurrentInstance} from "vue";
import throttle from "lodash/throttle";
import * as echarts from "echarts";
import type { EChartsOption } from "echarts";
// https://echarts.apache.org/zh/option.html#title.padding
// https://echarts.apache.org/handbook/zh/basics/import

const props = defineProps({
  useScale: { // 使用等比縮放
    type: Boolean,
    default: false,
  },
  hRatio: {
    type: [String, Number],
    default: 100
  },
  chartOption: {
    type: Object as () => EChartsOption,
    default: () => ({})
  }
});

const El_ChartItem = ref();
const instance = getCurrentInstance();
const myChart = shallowRef<any>();

const cardStyle = computed(() => {
  if (props.useScale) {
    return { "padding-bottom": `${props.hRatio}%`};
  }
  return  { "height": `${props.hRatio}%` };
});

onMounted(() => {
  myChart.value = echarts.init(El_ChartItem.value);
  SetOption();
});

//  -------------------------------------------------------------------------------------------------
// 大小重置
const Resize = throttle(() => {
  if (!instance?.isMounted) return;
  myChart.value?.resize();
}, 400);

// 設定值
const SetOption = () => {
  myChart.value?.setOption(props.chartOption);
};

defineExpose({ Resize ,SetOption});
</script>

<style lang="scss" scoped>
// 佈局
#ChartBasic {
  background-color: var(--bgmBg200);
  .chart-card {
    position: relative;
    width: 100%;
    border: 1px solid var(--bgmBorder100);
    .chart-Item {
      @include absolute;
      @include size;
    }
  }
}
// 組件
#ChartBasic {

}
</style>
