import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../lib/articleData';
import { formatDate, getArticleUrl } from '../lib/articles';
import Pagination from '../components/Pagination';

const PAGE_SIZE = 5;

const NewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filteredArticles = articles.filter(article => 
    article.section.includes('金石资讯')
  );
  const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE);
  const pageArticles = filteredArticles.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-[200px]">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <h3 className="text-xlys-dark font-bold text-lg mb-4">金石资讯</h3>
          <ul className="flex flex-wrap gap-2 lg:block lg:space-y-2">
            <li className="flex-1 lg:flex-none">
              <Link to="/news" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">金石资讯</Link>
            </li>
            <li className="flex-1 lg:flex-none">
              <Link to="/news/member" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">社员动态</Link>
            </li>
            <li className="flex-1 lg:flex-none">
              <Link to="/news/activity" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">活动动态</Link>
            </li>
            <li className="flex-1 lg:flex-none">
              <Link to="/news/government" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">政务信息</Link>
            </li>
            <li className="flex-1 lg:flex-none">
              <Link to="/news/notice" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">公告公示</Link>
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
            <Link to="/news" className="hover:text-xlys-red">金石资讯</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">金石资讯</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">金石资讯</h2>
          {filteredArticles.length > 0 ? (
            <>
              <div className="space-y-4">
                {pageArticles.map((article, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-xlys-beige-dark last:border-b-0">
                    <div className="w-24 h-20 sm:w-32 sm:h-24 flex-shrink-0 overflow-hidden">
                      {article.headerImg ? (
                        <img src={article.headerImg} alt={article.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full img-placeholder flex items-center justify-center">
                          <span className="text-xs">新闻图片</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xlys-dark font-bold text-sm mb-2">
                        <Link to={getArticleUrl(article.filename)} className="hover:text-xlys-red">{article.title}</Link>
                      </h4>
                      <p className="text-xlys-gray text-xs mb-2">
                        {article.subtitle}
                      </p>
                      <p className="text-xlys-gray text-xs">
                        {formatDate(article.date)} · {article.author}
                      </p>
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

export default NewsPage;
