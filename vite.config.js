import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: 'inline',
    minify: 'esbuild',
    emptyOutDir: true,
    copyPublicDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@libs': path.resolve(__dirname, './src/libs'),
    },
  },
  server: {
    port: 4000,
  },
});
