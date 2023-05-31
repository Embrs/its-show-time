import { getCurrentInstance } from "vue";

export default () => {
  const { proxy } = getCurrentInstance()!;
  const $gsap = proxy!.$gsap;
  return { $gsap };
};
