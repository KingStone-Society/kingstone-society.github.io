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
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xlys-dark font-bold text-lg">金石资讯</h3>
        <Link to="/news" className="text-xlys-red text-sm flex items-center">
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
                className="w-24 h-20 sm:w-20 sm:h-16 object-cover rounded"
              />
            </Link>
          ) : (
            <div className="w-24 h-20 sm:w-20 sm:h-16 flex-shrink-0 img-placeholder rounded flex items-center justify-center">
              <span className="text-xs">首图</span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h4 className="text-xlys-dark font-bold text-sm mb-2">
              <Link to={getArticleUrl(featuredArticle.filename)} className="hover:text-xlys-red line-clamp-2">{featuredArticle.title}</Link>
            </h4>
            <p className="text-xlys-gray text-xs">
              {formatDate(featuredArticle.date)} · {featuredArticle.author}
            </p>
          </div>
        </div>
      )}
      <ul className="flex-1 space-y-2 overflow-hidden">
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
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-xlys-beige-dark">
        <a
          href="https://ssjg.jdjy.sh.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:opacity-80 transition-opacity"
        >
          <img src="/logo-ssjg.png" alt="学校官网" className="h-14 w-auto object-contain mb-1" />
          <span className="text-xs text-xlys-gray">学校官网</span>
        </a>
        <a
          href="https://qian-mf.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:opacity-80 transition-opacity"
        >
          <img src="/logo-XCL.jpg" alt="星川庐" className="h-14 w-auto object-contain mb-1" />
          <span className="text-xs text-xlys-gray">钱牧风个人博客</span>
        </a>
      </div>
    </div>
  );
};

export default NewsSection;