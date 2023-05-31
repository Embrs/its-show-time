import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
// import type { GSAP } from "./interface";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const $gsap: Gsap = {
  gsap,
  ScrollTrigger,
  TextPlugin
};

export interface Gsap {
  gsap: typeof gsap,
  ScrollTrigger: typeof ScrollTrigger,
  TextPlugin: typeof TextPlugin,
}
export default $gsap;
