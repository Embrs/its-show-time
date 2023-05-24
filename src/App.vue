<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template lang="pug">
header
  aButton(type="primary"  @click="") {{ "AA" }}
  div(class="wrapper")
    HelloWorld(msg="You did it!")
    nav
      RouterLink(to="/") Home
      RouterLink(to="/about") About
RouterView
</template>

<style lang="scss" scoped>

</style>
