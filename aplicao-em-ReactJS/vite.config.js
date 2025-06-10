import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5173
  },
  // 👇 ESSA É A PARTE MAIS IMPORTANTE
  resolve: {
    alias: {
      '/@': '/src'
    }
  },
  base: './', // <-- Isso aqui é crucial
});
