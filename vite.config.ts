import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "${path.resolve(__dirname, "src/styles/_mixins.scss")}";
          @import "${path.resolve(__dirname, "src/styles/_globals.scss")}";
        `,
      },
    },
  },
});
