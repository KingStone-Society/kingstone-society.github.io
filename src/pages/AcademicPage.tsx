import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../lib/articleData';
import { formatDate, getArticleUrl } from '../lib/articles';
import Pagination from '../components/Pagination';

const PAGE_SIZE = 5;

const AcademicPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filteredArticles = articles.filter(article => 
    article.section.includes('社务研讨') && article.section.includes('研讨文集')
  );
  const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE);
  const pageArticles = filteredArticles.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-[200px]">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <h3 className="text-xlys-dark font-bold text-lg mb-4">社务研讨</h3>
          <ul className="flex flex-wrap gap-2 lg:block lg:space-y-2">
            <li className="flex-1 lg:flex-none">
              <Link to="/academic" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">研讨文集</Link>
            </li>
            <li className="flex-1 lg:flex-none">
              <Link to="/academic/submission" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">社务征稿</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <div className="flex items-center text-xs text-xlys-gray mb-6">
            <span>当前位置：</span>
            <Link to="/" className="hover:text-xlys-red">首页</Link>
            <span> &gt; </span>
            <Link to="/academic" className="hover:text-xlys-red">社务研讨</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">研讨文集</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">研讨文集</h2>
          {filteredArticles.length > 0 ? (
            <>
              <div className="space-y-4">
                {pageArticles.map((article, index) => (
                  <div key={index} className="flex items-center gap-4 pb-4 border-b border-xlys-beige-dark last:border-b-0">
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                      {article.headerImg ? (
                        <img src={article.headerImg} alt={article.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full img-placeholder flex items-center justify-center">
                          <span className="text-xs">封面图</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xlys-dark font-bold text-sm mb-1">
                        <Link to={getArticleUrl(article.filename)} className="hover:text-xlys-red">{article.title}</Link>
                      </h4>
                      <p className="text-xlys-gray text-xs mb-1">
                        {formatDate(article.date)} · {article.author}
                      </p>
                      <div className="flex gap-2">
                        {article.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xlys-red text-xs">[{tag}]</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </>
          ) : (
            <div className="text-center text-xlys-gray py-10">
              <p>暂无文章，请上传文章到 public/articles 目录</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicPage;
