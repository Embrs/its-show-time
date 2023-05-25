<template lang="pug">
//- 請填寫功能描述👈
#bgm-login
  p bgm-login
  a-button(@click="ApiLogin") LOGIN
  RouterLink(to="/bgm") BGM
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Login } from "@/protocal/RESTfulApi/methods/auth";
import type { LoginParams, LoginResData } from "@/protocal/RESTfulApi/methods/interface/auth";

  // 會員登入
  const ApiLogin = async (): Promise<LoginResData | false> => {
    const params: LoginParams = {
      account: "aa@aa.aa",
      password: "1234"
    };
    const { data, status: code } = await Login(params);
    if (code.err === 0) {
      // be fix user data
      // 設定使用者資訊
      return data;
    }
    return false;
  };
</script>

<style lang="scss" scoped>
// 佈局
#bgm-login {
}
// 組件
#bgm-login {
}
</style>
