import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../lib/articleData';
import { getArticleUrl } from '../lib/articles';

const AcademicResources: React.FC = () => {
  const seminarArticles = articles.filter(article => 
    article.section.includes('社务研讨') && article.section.includes('研讨文集')
  ).slice(0, 4);
  
  const journalArticles = articles.filter(article => 
    article.section.includes('金石艺丛') && article.section.includes('在线社刊')
  ).slice(0, 4);

  return (
    <div className="w-full lg:w-[343px] p-4">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-xlys-dark font-bold text-lg section-title flex-shrink-0">学术资源</h3>
        <Link to="/academic" className="text-xlys-red text-sm section-more flex items-center flex-shrink-0">
          <span>更多</span>
          <span className="ml-1">&gt;&gt;</span>
        </Link>
      </div>
      {seminarArticles.length > 0 || journalArticles.length > 0 ? (
        <div className="space-y-3">
          <ul className="space-y-2">
            {seminarArticles.map((item, index) => (
              <li key={index} className="flex items-start">
                <Link to="/academic" className="text-xlys-red text-xs mr-2 flex-shrink-0">[研讨文集]</Link>
                <Link
                  to={getArticleUrl(item.filename)}
                  className="text-xlys-dark text-sm hover:text-xlys-red truncate"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {journalArticles.map((item, index) => (
              <li key={index} className="flex items-start">
                <Link to="/journal" className="text-xlys-brown text-xs mr-2 flex-shrink-0">[金石艺丛]</Link>
                <Link
                  to={getArticleUrl(item.filename)}
                  className="text-xlys-dark text-sm hover:text-xlys-red truncate"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center text-xlys-gray py-10">
          <p>暂无文章，请上传文章到 public/articles 目录</p>
        </div>
      )}
    </div>
  );
};

export default AcademicResources;