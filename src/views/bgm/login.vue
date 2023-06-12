<template lang="pug">
//- 請填寫功能描述👈
#bgm-login
  .log-box
    .login-title {{"LOGIN"}}
    aForm(
      ref="El_LoginFrom"
      name="loginForm"
      :model="formProps"
      :rules="fromRules"
    )
      aFormItem(name="account")
        aInput(
          v-model:value="formProps.account"
          placeholder="ACCOUNT"
        )
      aFormItem(name="password")
        aInput(
          v-model:value="formProps.password"
          placeholder="PASSWORD"
          type="password"
          autocomplete="off"
        )
      aButton(
        type="primary"
        @click="ClickLogin"
      ) {{"Login"}}
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import debounce from "lodash/debounce";
import type { Rule } from "ant-design-vue/es/form";
import type { FormInstance } from "ant-design-vue";

const $route = useRouter();
// -------------------------------------------------------------------------------------------------
interface FromProps {
  account: string ;
  password: string
}
const formProps = ref<FromProps>({
  account: "",
  password: "",
});
const El_LoginFrom =ref<FormInstance>();
// -------------------------------------------------------------------------------------------------
// 密碼驗證
const ValidatePass = async (_rule: Rule, value: string) => {
  if (value === "") return Promise.reject(" ");
  return Promise.resolve();
};

const fromRules: Record<string, Rule[]> = {
  account: [{ required: true, message: " ", trigger: "change" }],
  password: [{ required: true, validator: ValidatePass, trigger: "change" }],
};

// -------------------------------------------------------------------------------------------------
// const HandleFinish = () => {
//   $route.push("/bgm");
// };
const ClickLogin = debounce(function () {
  CheckFlow();
}, 400, { leading: true, trailing: false });

const CheckFlow = async() => {
  const isPass = await El_LoginFrom.value?.validateFields().then(()=> true).catch(()=> false) ;
  console.log("res", isPass);
  if (isPass) $route.push("/bgm");
};
</script>

<style lang="scss" scoped>
// 佈局
#bgm-login {
  @include size;
  @include center;
  padding: 20px;
  .log-box {
    width: 400px;
    padding: 30px 40px;
    border-radius: 5px;
    color: white;
    background: #D2D2D2;
  }
}

// 組件
#bgm-login {
  .login-title {
    @include font(30px, 700);
    padding-bottom: 20px;
  }
}
</style>
