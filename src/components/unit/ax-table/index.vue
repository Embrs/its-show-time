<template lang="pug">
//- 請填寫功能描述👈
#AxTable(ref="El_AxTable" @scroll="TableScroll")
  .header-row
    .head-item.fist-item {{"姓名"}}
      HeadSortBtn(
        :isSort="currentSortKey === 'name'"
        :sortType="sortUpDown"
        @on-click="ClickSortBtn('name')"
      )
    .head-item {{"E-mail"}}
      HeadSortBtn(
        :isSort="currentSortKey === 'email'"
        :sortType="sortUpDown"
        @on-click="ClickSortBtn('email')"
      )
    .head-item {{"性別"}}
      HeadSortBtn(
        :isSort="currentSortKey === 'gender'"
        :sortType="sortUpDown"
        @on-click="ClickSortBtn('gender')"
      )
    .head-item {{"手機號碼"}}
      HeadSortBtn(
        :isSort="currentSortKey === 'phone'"
        :sortType="sortUpDown"
        @on-click="ClickSortBtn('phone')"
      )
    .head-item {{"金額"}}
      HeadSortBtn(
        :isSort="currentSortKey === 'money'"
        :sortType="sortUpDown"
        @on-click="ClickSortBtn('money')"
      )
  .body-row(v-for="tableItem of tableList" :key="tableItem.id")
    p.fist-item {{ tableItem.name }}
    p {{ tableItem.email }}
    p.text-center(
      :class="{'icon-venus':tableItem.gender==='女', 'icon-mars': tableItem.gender==='男'}"
    )
    p {{ tableItem.phone }}
    p {{ NumToMoney(tableItem.money) }}
  .status-bar(v-show="loadStatus !== 'ok'")
    p(v-show="loadStatus === 'loading'") {{"Loading..."}}
    p(v-show="loadStatus === 'noData'") {{"No data"}}

</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import HeadSortBtn from "./head-sort-btn.vue";
import { CreateUUID, NumToMoney } from "@/utils/fn";
import throttle from "lodash/throttle";
import sortBy from "lodash/sortBy";
import * as MockFn from "@/utils/mock";

interface MemberRow {
  id: string,
  name: string,
  email: string,
  gender: string,
  phone: string,
  money: string | number
}
const tableList = ref<MemberRow[]>([]);
const loadStatus = ref<"ok"|"loading"|"noData">("loading");
const El_AxTable = ref();

type SortKey = ""|"name"|"email"|"gender"|"phone"|"money"
const currentSortKey = ref<SortKey>("");
const sortUpDown = ref<"down"|"up">("down");
// -------------------------------------------------------------------------------------------------
onMounted(() => {
  PushList();
});

// -------------------------------------------------------------------------------------------------
const TableScroll = (el: Event) => {
  const {offsetHeight, scrollTop, scrollHeight} = el.target as HTMLElement;
  if (scrollHeight - (offsetHeight + scrollTop) < 1) {
    loadStatus.value = "loading";
    setTimeout(() => {
      PushList();
    }, 500);
  }
};

const PushList = throttle(() => {
  const _list: MemberRow[] = [];
  for (let i = 1; i < 100; i++) {
    _list.push(
      {
        id: CreateUUID(),
        name: MockFn.MockName(),
        email: MockFn.MockeEmail(),
        gender: MockFn.MockeGender(),
        phone: MockFn.MockPhone(),
        money: MockFn.MockNum(8)
      }
    );
  }
  tableList.value.push(..._list);
  
  currentSortKey.value = "";
  sortUpDown.value = "down";

  if (_list.length > 0) loadStatus.value = "ok";
  if (_list.length === 0) loadStatus.value = "noData";
}, 500);

const ClickSortBtn = throttle((key: SortKey) => {
  if (key === "") return;

  if (key === currentSortKey.value) {
    sortUpDown.value = sortUpDown.value === "up"? "down": "up";
  } 
  
  if (key !== currentSortKey.value) {
    currentSortKey.value = key;
    sortUpDown.value = "down";
  }
  // sort
  const _arr = sortBy(tableList.value, (i)=> i?.[key]);
  if (sortUpDown.value == "up") {
    _arr.reverse();
  }
  tableList.value = _arr;
  const scrollLeft = El_AxTable.value.scrollLeft;
  El_AxTable.value.scrollTo(scrollLeft, 0);
}, 200);
</script>

<style lang="scss" scoped>
// 佈局
#AxTable {
  @include size;
  max-height: 100%;
  scroll-behavior: smooth;
  overflow: overlay;
}
// 組件
#AxTable {
  .table {
    overflow: overlay;
  }
  .row-basic {
    min-width: 800px;
    display: grid;
    grid-template-columns: 0.8fr 1.8fr 0.6fr 1fr 1.2fr;
    gap: 10px;
  }
  .header-row {
    @extend  .row-basic;
    position: sticky;
    top: 0;
    background: #549896;
    color: #fff;
    font-weight: 500;
    letter-spacing: 2px;

    z-index: 1;
    .head-item {
      padding: 8px 10px;
      display: grid;
      grid-template-columns: auto 20px;
      &:not(:last-child) {
        border-right: 1px solid #418583;
      }
    }
    .fist-item {
      background: #549896;
    }
  }
  .body-row {
    @extend  .row-basic;
    background: #fff;
    color: #232325;
    font-weight: 300;
    letter-spacing: 1px;;
    border-bottom: 1px solid #efeeee;
    p {
      padding: 3px 10px;
      &:not(:last-child) {
        border-right: 1px solid #efeeee;
      }
    }
    .fist-item{
      background: #fff;
    }
  }
  .fist-item {
    position: sticky;
    left: 0;
  }
  .text-center {
    text-align: center;
  }
  
  .status-bar {
    padding: 10px;
    color: #666;
    background-color: #efeeee;
    text-align: center;
    letter-spacing: 2px;;
  }
  .icon-venus {
    color: #d04186;
  }
  .icon-mars {
    color: #4d7dc2;
  }
}
</style>
