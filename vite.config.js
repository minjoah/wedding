import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { githubPagesSpa } from "@sctg/vite-plugin-github-pages-spa";

// https://vite.dev/config/
export default defineConfig({
  base: "/wedding/",
  plugins: [vue(), vueDevTools(),githubPagesSpa(),],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
