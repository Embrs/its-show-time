  <template lang="pug">
//- 請填寫功能描述👈
#friebase
  p {{ "Friebase" }}
  aInput(v-model:value="message")
  aButton(@click="msgFn.PushMessage(message)") {{"Send"}} 
  .list
    .item(v-for="msgInfo in msgList" :key="msgInfo.id")
      p {{ msgInfo.id }}
      p {{ msgInfo.value }}
      aButton(@click="msgFn.RemoveMessage(msgInfo.id)") {{"X"}}
</template>

<script setup lang="ts">
import {ref, computed} from "vue";
import firebaseMsg from "@/components/vue-fn/firebase/firebase-message";

const msgFn = firebaseMsg();
const message = ref("");
const msgList = computed(() => {
  return Object.keys(msgFn.msgData.value).map((key) =>{
    return {
      id: key,
      value: msgFn.msgData.value[key]
    };
  });
});

</script>

<style lang="scss" scoped>
// 佈局
#friebase {
  padding:20px;
}
// 組件
#friebase {
  .item {
    display: grid;
    grid-template-columns: 200px 1fr 100px;
    padding: 5px;
    border: 1px solid #666;
    border-radius: 4px;
  }
}
</style>
