import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Папка, куда будут собираться файлы
    assetsDir: '', // Папка для статических файлов
    rollupOptions: {
      input: {
        main: './index.html', // Входной файл
      },
    },
  },
});