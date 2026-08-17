import { Article, parseMarkdown } from './articles';

// ===== 全局文章数据 =====
// 将 .md 文件放入 src/articles/ 目录即可自动加载
// 开发模式：新增文件后，保存任意文件触发 HMR 即可刷新
// 生产模式：执行 npm run build 重新构建

export const articles: Article[] = [];

// 全局文章内容缓存（用于 ArticlePage 直接获取正文，无需 fetch）
export const articlesContentMap: Record<string, string> = {};

/**
 * 从 import.meta.glob 结果中加载所有文章
 */
function loadAllArticles() {
  articles.length = 0;
  Object.keys(articlesContentMap).forEach(k => delete articlesContentMap[k]);

  // 使用 import.meta.glob 扫描 src/articles/ 下所有 .md 文件
  const context = import.meta.glob('../articles/*.md', { eager: true, import: 'default', query: '?raw' });

  for (const [path, content] of Object.entries(context)) {
    const contentStr = content as string;
    const filename = path.split('/').pop() || '';

    // 跳过标准格式模板文件
    if (filename.includes('template') || filename.includes('标准格式')) {
      continue;
    }

    const article = parseMarkdown(contentStr, filename);
    if (article) {
      articles.push(article);
      articlesContentMap[filename] = article.content;
    }
  }

  // 按日期倒序排列
  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  console.log(`[文章系统] 共加载 ${articles.length} 篇文章:`);
  articles.forEach(a => console.log(`  - ${a.filename} [${a.section.join(' / ')}] ${a.title}`));
}

// 模块加载时执行
loadAllArticles();

// HMR：当 articleData.ts 自身或依赖的文件变化时重新加载
// Vite 的 import.meta.glob 在 HMR 更新时会自动重新获取文件列表
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    loadAllArticles();
  });
}

export function getLatestArticles(count: number): Article[] {
  return articles.slice(0, count);
}
