import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { articles, articlesContentMap } from '../lib/articleData';
import { formatDate } from '../lib/articles';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = articles.find(a => a.filename.replace('.md', '') === slug);

  // 直接从 articlesContentMap 获取正文（构建时已预加载），不再 fetch
  const rawContent = article ? (articlesContentMap[article.filename] || '') : '';

  // 如果正文第一行是 "***"，则重定向到第二行的 URL
  useEffect(() => {
    if (!rawContent) return;
    const lines = rawContent.split('\n');
    if (lines[0]?.trim() === '***' && lines[1]?.trim()) {
      const targetUrl = lines[1].trim();
      // 外部链接直接跳转，内部路径用 navigate
      if (targetUrl.startsWith('http://') || targetUrl.startsWith('https://')) {
        window.location.replace(targetUrl);
      } else {
        navigate(targetUrl, { replace: true });
      }
    }
  }, [rawContent, navigate]);

  // 格式化正文：处理自定义语法
  const formatContent = (text: string): string => {
    let formatted = text;
    // 独立一行的图片路径 → 居中 img 标签（支持 jpg/png/gif/webp/svg/bmp/jpeg）
    formatted = formatted.replace(
      /^(\/images\/.+\.(?:jpe?g|png|gif|webp|svg|bmp))$/gim,
      '<p style="text-align: center;"><img src="$1" alt="" style="max-width: 100%; height: auto; display: inline-block;" /></p>'
    );
    // {内容} → 居中
    formatted = formatted.replace(/\{([^}]+)\}/g, '<p style="text-align: center;">$1</p>');
    // →内容 → 右对齐
    formatted = formatted.replace(/→([^\n]+)/g, '<p style="text-align: right;">$1</p>');
    // ***粗斜体***
    formatted = formatted.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');
    // **粗体**
    formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // *斜体*
    formatted = formatted.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    // @@字号内容@@ → 自定义字号
    formatted = formatted.replace(/@@(\d+)([^@]+)@@/g, '<span style="font-size: $1px;">$2</span>');
    return formatted;
  };

  if (!article) {
    return (
      <div className="bg-white border border-xlys-beige-dark p-4">
        <p className="text-xlys-gray">文章不存在</p>
        <Link to="/" className="text-xlys-red hover:underline">返回首页</Link>
      </div>
    );
  }

  // 根据文章的 section 生成面包屑
  const renderBreadcrumb = () => {
    const items: { label: string; href: string }[] = [
      { label: '首页', href: '/' }
    ];

    if (article.section.includes('金石资讯')) {
      items.push({ label: '金石资讯', href: '/news' });
      if (article.section.includes('活动动态')) {
        items.push({ label: '活动动态', href: '/news/activity' });
      } else if (article.section.includes('社员动态')) {
        items.push({ label: '社员动态', href: '/news/member' });
      } else if (article.section.includes('政务信息')) {
        items.push({ label: '政务信息', href: '/news/government' });
      } else if (article.section.includes('公告公示')) {
        items.push({ label: '公告公示', href: '/news/notice' });
      }
    } else if (article.section.includes('社务研讨')) {
      items.push({ label: '社务研讨', href: '/academic' });
    } else if (article.section.includes('金石艺丛')) {
      items.push({ label: '金石艺丛', href: '/journal' });
    }

    return (
      <div className="flex items-center text-xs text-xlys-gray mb-6">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="mx-1"> &gt; </span>}
            {index < items.length - 1 ? (
              <Link to={item.href} className="hover:text-xlys-red">{item.label}</Link>
            ) : (
              <span className="text-xlys-red">{article.title}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const content = formatContent(rawContent);

  return (
    <div className="bg-white border border-xlys-beige-dark p-4">
      {renderBreadcrumb()}
      <h1 className="text-xlys-dark font-bold text-2xl mb-4 text-center">{article.title}</h1>
      <div className="text-center text-xlys-gray text-sm mb-6 pb-4 border-b border-xlys-beige-dark">
        <span>{formatDate(article.date)}</span>
        <span className="mx-2">·</span>
        <span>{article.author}</span>
        {article.tags.length > 0 && (
          <>
            <span className="mx-2">·</span>
            {article.tags.map((tag, index) => (
              <span key={index} className="text-xlys-red">{tag}{index < article.tags.length - 1 ? ' ' : ''}</span>
            ))}
          </>
        )}
      </div>
      <div
        className="prose prose-sm max-w-none text-xlys-dark"
        style={{
          lineHeight: '1.8',
          textAlign: 'justify'
        }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            p: ({ children, style }) => (
              <p style={{
                textIndent: style?.textAlign === 'center' || style?.textAlign === 'right' ? '0' : '2em',
                marginBottom: '1em',
                textAlign: style?.textAlign || 'justify'
              }}>
                {children}
              </p>
            ),
            a: ({ children, href }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#c41d1d', wordBreak: 'break-all' }}
              >
                {children}
              </a>
            ),
            h1: ({ children }) => (
              <h1 style={{ textAlign: 'center', marginBottom: '1em' }}>{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 style={{ textAlign: 'center', marginBottom: '1em' }}>{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 style={{ textAlign: 'center', marginBottom: '1em' }}>{children}</h3>
            )
          }}
        >
          {content}
        </ReactMarkdown>
        {/* 金石资讯文章末尾显示首图 */}
        {article.section.includes('金石资讯') && article.headerImg && (
          <div className="mt-6 text-center">
            <img
              src={article.headerImg}
              alt={article.title}
              className="max-w-full h-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
