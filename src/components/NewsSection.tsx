import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../lib/articleData';
import { formatDate, getArticleUrl } from '../lib/articles';

const NewsSection: React.FC = () => {
  const newsArticles = articles.filter(article => 
    article.section.includes('金石资讯')
  );
  const featuredArticle = newsArticles[0];
  const otherArticles = newsArticles.slice(1, 5);

  return (
    <div className="w-full lg:w-[400px] p-4 flex flex-col">
      <div className="flex flex-wrap items-center gap-4 mb-8 lg:gap-2 lg:mb-4">
        <h3 className="text-xlys-dark font-bold text-lg section-title flex-shrink-0">金石资讯</h3>
        <Link to="/news" className="text-xlys-red text-sm section-more flex items-center flex-shrink-0">
          <span>更多</span>
          <span className="ml-1">&gt;&gt;</span>
        </Link>
      </div>
      {featuredArticle && (
        <div className="mb-4 flex gap-3">
          {featuredArticle.headerImg ? (
            <Link to={getArticleUrl(featuredArticle.filename)} className="flex-shrink-0">
              <img
                src={featuredArticle.headerImg}
                alt={featuredArticle.title}
                className="w-96 h-80 sm:w-40 sm:h-32 object-cover rounded"
              />
            </Link>
          ) : (
            <div className="w-96 h-80 sm:w-40 sm:h-32 flex-shrink-0 img-placeholder rounded flex items-center justify-center">
              <span className="text-xs section-meta">首图</span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h4 className="text-xlys-dark font-bold text-sm section-list mb-4 lg:mb-2">
              <Link to={getArticleUrl(featuredArticle.filename)} className="hover:text-xlys-red line-clamp-2">{featuredArticle.title}</Link>
            </h4>
            <p className="text-xlys-gray text-xs">
              {formatDate(featuredArticle.date)} · {featuredArticle.author}
            </p>
          </div>
        </div>
      )}
      <ul className="flex-1 space-y-4 lg:space-y-2 overflow-hidden">
        {otherArticles.map((item, index) => (
          <li key={index}>
            <Link
              to={getArticleUrl(item.filename)}
              className="text-xlys-dark text-sm hover:text-xlys-red block truncate"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8 mt-4 pt-4 lg:justify-center lg:gap-x-10 lg:gap-y-4 border-t border-xlys-beige-dark">
        <a
          href="https://ssjg.jdjy.sh.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:opacity-80 transition-opacity"
        >
          <img src="/logo-ssjg.png" alt="学校官网" className="h-72 sm:h-[120px] lg:h-10 w-auto object-contain mb-2" />
          <span className="text-xs text-xlys-gray link-text-2x">学校官网</span>
        </a>
        <a
          href="https://qian-mf.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:opacity-80 transition-opacity"
        >
          <img src="/logo-XCL.jpg" alt="星川庐" className="h-72 sm:h-[120px] lg:h-10 w-auto object-contain mb-2" />
          <span className="text-xs text-xlys-gray link-text-2x">钱牧风个人博客</span>
        </a>
      </div>
    </div>
  );
};

export default NewsSection;