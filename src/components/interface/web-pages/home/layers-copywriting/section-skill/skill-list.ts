import { reactive } from "vue";

import _iconCSharp from "@/assets/skill/c-sharp.svg";
import _iconCss3 from "@/assets/skill/css3.svg";
import _iconElectron from "@/assets/skill/electron.svg";
import _iconGit from "@/assets/skill/git.svg";
import _iconHtml5 from "@/assets/skill/html5.svg";
import _iconIllustrator from "@/assets/skill/illustrator.svg";
import _iconJavascript from "@/assets/skill/javascript.svg";
import _iconNuxt from "@/assets/skill/nuxt.svg";
import _iconPhotoshop from "@/assets/skill/photoshop.svg";
import _iconPug from "@/assets/skill/pug.svg";
import _iconPuppeteer from "@/assets/skill/puppeteer.png";
import _iconSass from "@/assets/skill/sass.svg";
import _iconSketch from "@/assets/skill/sketch.svg";
import _iconVscode from "@/assets/skill/vscode.svg";
import _iconVue from "@/assets/skill/vue.svg";

export default () => {
  const skillList = reactive([
    { name: "Vue", logo: _iconVue },
    { name: "Nuxt", logo: _iconNuxt },
    { name: "Javascript", logo: _iconJavascript },
    { name: "Puppeteer", logo: _iconPuppeteer },
    { name: "Electron", logo: _iconElectron },
    { name: "Git", logo: _iconGit },
    { name: "Html5", logo: _iconHtml5 },
    { name: "Pug", logo: _iconPug },
    { name: "Css3", logo: _iconCss3 },
    { name: "Sass", logo: _iconSass },
    { name: "Sketch", logo: _iconSketch },
    { name: "Illustrator", logo: _iconIllustrator },
    { name: "Photoshop", logo: _iconPhotoshop },
    { name: "VSCode", logo: _iconVscode },
    { name: "C#", logo: _iconCSharp },
  ]);
  return { skillList };
};
