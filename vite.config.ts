import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import fs from "fs"; // https use (打包請關閉)
// import path from "path"; // https use (打包請關閉)

// app version
const { version } = JSON.parse(fs.readFileSync("package.json", "utf-8"));

// set html value
const ValuePlugin = (name: string, key: string, value: string) => {
  return {
    name,
    transformIndexHtml(html: any) {
      return html.replaceAll(key, value);
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      ValuePlugin("version-plugin", "<!-- APP_VERSION -->", version)
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    // base: "/its-show-time/", // github page use
    server: {
      host: "0.0.0.0",
      port: 8088,
      // https: { // https use
      //   key: fs.readFileSync(path.resolve(__dirname, "localhost.key")),
      //   cert: fs.readFileSync(path.resolve(__dirname, "localhost.crt"))
      // },
      proxy: {
        "/api": {
          target: loadEnv(mode, process.cwd()).VITE_APP_URL,
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "./src/assets/styles/scss/global/index.scss";
            `
        },
        less: {
          javascriptEnabled: true,
          modifyVars: {
            "primary-color": "#78CDE9",
            "error-color": "#f2835d",
            "border-radius-base": "4px",
          },
        }
      }
    },
    build: {
      chunkSizeWarningLimit: 1500, // 分割檔案
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          }
        }
      }
    }
  };
});
