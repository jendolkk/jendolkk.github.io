import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://jendolkk.github.io",
  integrations: [mdx()],
  vite: {
    cacheDir: ".astro/vite",
  },
});
