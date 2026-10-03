import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { copyFileSync, existsSync, readFileSync, writeFileSync, renameSync, unlinkSync } from 'node:fs';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    sourcemap: 'hidden',
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
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
    // GitHub Pages 部署配置：
    // 1. 把构建出的 index.html 重命名为 app.html（React 应用入口）
    // 2. 把 public/index.html（前置页面）复制到 dist/index.html
    // 3. 把 app.html 复制为 404.html（SPA 路由兜底）
    // 4. 修正 app.html 中的资源引用路径为相对路径
    {
      name: 'github-pages-deploy',
      closeBundle() {
        const distDir = resolve(process.cwd(), 'dist');
        const publicDir = resolve(process.cwd(), 'public');
        const appHtml = resolve(distDir, 'app.html');
        const distIndexHtml = resolve(distDir, 'index.html');
        const publicIndexHtml = resolve(publicDir, 'index.html');
        const notFoundHtml = resolve(distDir, '404.html');

        // 1. 把构建出的 index.html 重命名为 app.html（React 应用入口）
        if (existsSync(distIndexHtml)) {
          renameSync(distIndexHtml, appHtml);
          console.log('[GitHub Pages] 已生成 app.html（React 应用入口）');
        }

        // 2. 把 public/index.html（前置页面）复制到 dist/index.html
        if (existsSync(publicIndexHtml)) {
          copyFileSync(publicIndexHtml, distIndexHtml);
          console.log('[GitHub Pages] 已复制前置页面到 index.html');
        }

        // 3. 生成 404.html（SPA 路由兜底）
        if (existsSync(appHtml)) {
          copyFileSync(appHtml, notFoundHtml);
          console.log('[GitHub Pages] 已生成 404.html（SPA 路由兜底）');
        }

        // 4. 修改 app.html 中的资源引用路径（把 /assets/ 改为 ./assets/）
        if (existsSync(appHtml)) {
          let content = readFileSync(appHtml, 'utf-8');
          content = content.replace(/href="\/assets\//g, 'href="./assets/');
          content = content.replace(/src="\/assets\//g, 'src="./assets/');
          writeFileSync(appHtml, content);
          console.log('[GitHub Pages] 已修正 app.html 资源路径为相对路径');
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
