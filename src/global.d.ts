import { ComponentCustomProperties } from "vue";
import type { Firebase } from "@/plugin/firebase";
import type { Gsap } from "@/plugin/gsap";
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $firebase: Firebase;
    $gsap: Gsap
  }
}
