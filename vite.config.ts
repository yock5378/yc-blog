import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import visualizer from 'rollup-plugin-visualizer';

const plugins = [];

// 打包視覺化分析
if (process.env.NODE_ENV === 'production') {
  plugins.push(
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ...plugins],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
