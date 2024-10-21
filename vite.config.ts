import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: 'src/pages',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "${path.resolve(__dirname, 'src/styles/_mixins.scss')}";
           @import "${path.resolve(__dirname, 'src/styles/_fonts.scss')}";
          @import "${path.resolve(__dirname, 'src/styles/_globals.scss')}";
        `,
      },
    },
  },
  preview: {
    port: 3001,
  },
  server: {
    port: 3000,
  },
});
