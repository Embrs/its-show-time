<template lang="pug">
//- 請填寫功能描述👈
#bgm-login
  p bgm-login
  RouterLink(to="/") home
  a-button(@click="ApiLogin") LOGIN
  a-button(@click="ApiVersion") Version
  RouterLink(to="/bgm") BGM
</template>

<script setup lang="ts">
import { Login, GetVersion } from "@/protocal/RESTfulApi/methods/auth";
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
    // 會員登入
    const ApiVersion = async (): Promise<boolean> => {
    const { data, status: code } = await GetVersion();
    if (code.err === 0) {
      // 設定使用者資訊
      return true;
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
