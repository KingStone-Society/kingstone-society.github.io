import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../lib/articleData';
import { formatDate, getArticleUrl } from '../lib/articles';
import Pagination from '../components/Pagination';

const PAGE_SIZE = 5;

const JournalPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filteredArticles = articles.filter(article => 
    article.section.includes('金石艺丛') && article.section.includes('在线社刊')
  );
  const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE);
  const pageArticles = filteredArticles.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  
  return (
    <div className="flex gap-4">
      <div className="w-[200px]">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <h3 className="text-xlys-dark font-bold text-lg mb-4">金石艺丛</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/journal" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">在线社刊</Link>
            </li>
            <li>
              <Link to="/journal/submission" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">社刊投稿</Link>
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
            <Link to="/journal" className="hover:text-xlys-red">金石艺丛</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">在线社刊</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">在线社刊</h2>
          {filteredArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                {pageArticles.map((article, index) => (
                  <div key={index} className="border border-xlys-beige-dark p-3">
                    <div className="w-full h-32 mb-3 overflow-hidden">
                      {article.headerImg ? (
                        <img src={article.headerImg} alt={article.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full img-placeholder flex items-center justify-center">
                          <span className="text-xs">封面图</span>
                        </div>
                      )}
                    </div>
                    <h4 className="text-xlys-dark font-bold text-sm mb-1">
                      <Link to={getArticleUrl(article.filename)} className="hover:text-xlys-red">{article.title}</Link>
                    </h4>
                    <p className="text-xlys-gray text-xs">
                      {formatDate(article.date)}
                    </p>
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

export default JournalPage;
