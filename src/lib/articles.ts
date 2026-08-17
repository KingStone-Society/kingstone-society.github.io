export interface Article {
  title: string;
  slug: string;
  subtitle: string;
  date: string;
  author: string;
  headerImg: string;
  tags: string[];
  content: string;
  filename: string;
  section: string[];
}

/**
 * 简易 YAML 解析器
 * 支持键值对、数组（- 语法）、行内数组（[a, b] 语法）
 * 自动处理日期中的 ISO 时间戳（提取日期部分）
 */
function parseYAML(frontmatter: string): Record<string, any> {
  const data: Record<string, any> = {};
  const lines = frontmatter.split('\n');
  let currentKey = '';
  let currentArray: string[] = [];
  let inArray = false;

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine === '' || trimmedLine.startsWith('#')) {
      continue;
    }

    if (trimmedLine.startsWith('- ') && inArray) {
      const value = trimmedLine.slice(2).trim();
      currentArray.push(value);
    } else if (trimmedLine.includes(':') && !trimmedLine.startsWith('-')) {
      // 遇到新的 key: value，先保存上一个数组
      if (inArray && currentKey) {
        data[currentKey] = currentArray;
        inArray = false;
        currentArray = [];
      }

      const colonIndex = trimmedLine.indexOf(':');
      const key = trimmedLine.slice(0, colonIndex).trim();
      let value = trimmedLine.slice(colonIndex + 1).trim();

      if (value === '') {
        // 空值 → 可能是数组的开始
        currentKey = key;
        inArray = true;
        currentArray = [];
      } else if (value.startsWith('[') && value.endsWith(']')) {
        // 行内数组: [a, b, c]
        data[key] = value.slice(1, -1).split(',').map((s: string) => s.trim().replace(/["']/g, ''));
      } else {
        // 普通键值对，去掉引号
        value = value.replace(/["']/g, '');

        // 如果是 date 字段且包含时间戳，提取日期部分
        if (key === 'date' && value.includes('T')) {
          value = value.split('T')[0];
        }

        data[key] = value;
      }
    }
  }

  // 收尾：保存最后一个数组
  if (inArray && currentKey) {
    data[currentKey] = currentArray;
  }

  return data;
}

/**
 * 解析完整的 Markdown 文章
 * 提取 frontmatter 和正文内容
 */
export function parseMarkdown(content: string, filename: string): Article | null {
  // 支持 \r\n 和 \n 两种换行符
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatterMatch) return null;

  const frontmatter = frontmatterMatch[1];
  const body = content.slice(frontmatterMatch[0].length).trim();

  const data = parseYAML(frontmatter);

  return {
    title: data.title || '',
    slug: data.slug || filename.replace('.md', ''),
    subtitle: data.subtitle || '',
    date: data.date || '',
    author: data.author || '',
    headerImg: data['header-img'] || '',
    tags: data.tags || [],
    content: body,
    filename,
    section: data.section || []
  };
}

/**
 * 格式化日期为中文格式
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' });
  } catch {
    return dateString;
  }
}

/**
 * 根据文件名生成文章 URL
 */
export function getArticleUrl(filename: string): string {
  return `/article/${filename.replace('.md', '')}`;
}

/**
 * 异步加载文章（供需要完整内容的场景使用）
 */
export async function loadArticles(): Promise<Article[]> {
  const articles: Article[] = [];

  try {
    const context = import.meta.glob('../articles/*.md', { eager: true, import: 'default', query: '?raw' });

    for (const [path, content] of Object.entries(context)) {
      const contentStr = content as string;
      const filename = path.split('/').pop() || '';
      const article = parseMarkdown(contentStr, filename);
      if (article) {
        articles.push(article);
      }
    }
  } catch (error) {
    console.error('Failed to load articles:', error);
  }

  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return articles;
}
