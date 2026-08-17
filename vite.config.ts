import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    sourcemap: 'hidden',
  },
  // 确保 src/articles/ 目录下的 .md 文件能被 Vite 正确监听
  assetsInclude: [],
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    tsconfigPaths(),
    // GitHub Pages SPA 路由兜底：
    // 构建完成后将 index.html 复制为 404.html，
    // 使直接访问/刷新子页面（如 /news、/article/xxx）时不返回空白页。
    {
      name: 'github-pages-404',
      closeBundle() {
        const distDir = resolve(process.cwd(), 'dist');
        const indexHtml = resolve(distDir, 'index.html');
        const notFoundHtml = resolve(distDir, '404.html');
        if (existsSync(indexHtml)) {
          copyFileSync(indexHtml, notFoundHtml);
          console.log('[GitHub Pages] 已生成 404.html（SPA 路由兜底）');
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
