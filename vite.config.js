import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: 'inline',
    minify: 'esbuild',
    emptyOutDir: true,
    copyPublicDir: true,
  },
  server: {
    port: 4000,
  },
});
