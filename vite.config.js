import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: '/nocrastinate/',
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        '404': './404.html',
      },
    },
  },
  server: {
    fs: {
      strict: false,
      allow: ['..', '404.html'],
    },
  },
});