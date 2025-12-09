// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://dltmdgml416.github.io/seunghee.github.io/",
  base: "/seunghee.github.io/",
  vite: {
    plugins: [tailwindcss()],
  },
});

