<template lang="pug">
//- 請填寫功能描述👈
#bgm-login
  .log-box
    .login-title {{"DEMO MANAGEMENT"}}
    aForm(
      ref="El_LoginFrom"
      name="loginForm"
      :model="formProps"
      :rules="fromRules"
    )
      aFormItem(name="account")
        aInput(
          v-model:value="formProps.account"
          size="large"
          placeholder="ACCOUNT"
        )
      aFormItem(name="password")
        aInput(
          v-model:value="formProps.password"
          size="large"
          placeholder="PASSWORD"
          type="password"
          autocomplete="off"
        )
      .btn-area
        .login-btn(
          @click="ClickLogin"
        ) {{"Login"}}
      //- aButton(
      //-   type="primary"
      //-   @click="ClickLogin"
      //- ) {{"Login"}}
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import debounce from "lodash/debounce";
import type { Rule } from "ant-design-vue/es/form";
import type { FormInstance } from "ant-design-vue";

const $router = useRouter();
// page keep -------------------------------------------------------------------------------------------------
import { useBgmPageKeepStore } from "@/stores/bgm-page-keep";
const bgmPageKeepStore = useBgmPageKeepStore();
// -------------------------------------------------------------------------------------------------
interface FromProps {
  account: string ;
  password: string
}
const formProps = ref<FromProps>({
  account: "test",
  password: "test",
});
const El_LoginFrom =ref<FormInstance>();
// -------------------------------------------------------------------------------------------------
onMounted(() => {
  bgmPageKeepStore.DeleteAll();
});
// -------------------------------------------------------------------------------------------------
// 密碼驗證
const ValidatePass = async (_rule: Rule, value: string) => {
  if (value === "") return Promise.reject("Please enter any password");
  return Promise.resolve();
};

const fromRules: Record<string, Rule[]> = {
  account: [{ required: true, message: "Please enter any account", trigger: "change" }],
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
  if (isPass) $router.push("/bgm");
};
</script>

<style lang="scss" scoped>
// 佈局
#bgm-login {
  background-image: url(@/assets/images/bg/bg-bgm.png);
  background-size: cover;
  @include size;
  @include center;
  padding: 20px;
  .log-box {
    width: 450px;
    padding: 40px 50px;
    border-radius: 5px;
    color: white;
    backdrop-filter: blur(5px);
    background: #202a363b;
    box-shadow: 0 0 7px 2px #4bd0fe82;
    overflow: hidden;
  }
  .btn-area {
    display: flex
  }
}

// 組件
#bgm-login {
  .login-title {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 5px;;
    padding-bottom: 20px;
    @include mobile-media {
      font-size: 20px;
    }
  }

  .login-btn {
    @include btn-click;
    padding: 8px 20px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;
    color: #fff;
    text-shadow: none;
    // background: #2f494c;
    box-shadow: transparent;
    border: 1px solid #34dded;
    transition: 0.5s ease;
    user-select: none;
    &:hover,&:focus {
      color: #ffffff;
      background: #317880;
      border: 1px solid #34dded;
      text-shadow:  0 0 5px #ffffff,
                    0 0 10px #ffffff,
                    0 0 20px #ffffff;
      box-shadow: 0 0 5px #34dded,
                  0 0 20px #34dded,
                  0 0 50px #34dded,
                  0 0 100px #34dded;
    }
  }


}
</style>
