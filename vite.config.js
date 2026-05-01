import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        firstPost: resolve(__dirname, 'blog/first-post.html'),
        tutorials: resolve(__dirname, 'tutorials/index.html')
      }
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
});
