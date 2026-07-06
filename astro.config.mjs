import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.aipraktis.co.id",

  integrations: [
    sitemap()
  ],

  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },

    plugins: [tailwindcss()]
  }
});