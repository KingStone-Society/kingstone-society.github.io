# 金石篆刻社官方网站

基于 React 18 + TypeScript + Vite + Tailwind CSS 构建的社团官网，部署在 GitHub Pages。

## 快速开始

```bash
npm install      # 安装依赖
npm run dev      # 启动开发服务器（http://localhost:5173/）
npm run build    # 构建生产版本（产物在 dist/）
```

## 部署

仓库名 `kingstone-society.github.io` 对应 GitHub Pages 主页站点，部署在根路径。

- **自动部署**：推送 main 分支后，`.github/workflows/deploy.yml` 会自动构建并发布。需在仓库 `Settings → Pages → Source` 中选择 **GitHub Actions**。
- **SPA 路由**：构建时会自动生成 `404.html` 兜底，刷新/直达子页面不会白屏。

## 文档

- 开发指南见 [网站开发指南.md](./网站开发指南.md)
- 目录说明见 [目录说明.txt](./目录说明.txt)
