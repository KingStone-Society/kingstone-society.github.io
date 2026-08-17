import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../lib/articleData';
import { formatDate, getArticleUrl } from '../lib/articles';
import Pagination from '../components/Pagination';

const PAGE_SIZE = 10;

const NewsMemberPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filteredArticles = articles.filter(article => 
    article.section.includes('金石资讯') && article.section.includes('社员动态')
  );
  const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE);
  const pageArticles = filteredArticles.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  
  return (
    <div className="flex gap-4">
      <div className="w-[200px]">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <h3 className="text-xlys-dark font-bold text-lg mb-4">金石资讯</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/news" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">金石资讯</Link>
            </li>
            <li>
              <Link to="/news/member" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">社员动态</Link>
            </li>
            <li>
              <Link to="/news/activity" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">活动动态</Link>
            </li>
            <li>
              <Link to="/news/government" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">政务信息</Link>
            </li>
            <li>
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
            <span className="text-xlys-red">社员动态</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">社员动态</h2>
          {filteredArticles.length > 0 ? (
            <>
              <ul className="space-y-4">
                {pageArticles.map((article, index) => (
                  <li key={index} className="flex items-start gap-4 pb-4 border-b border-xlys-beige-dark last:border-0">
                    <span className="text-xlys-gray text-xs flex-shrink-0 mt-1">{formatDate(article.date)}</span>
                    <Link to={getArticleUrl(article.filename)} className="text-xlys-dark text-sm hover:text-xlys-red flex-1">{article.title}</Link>
                  </li>
                ))}
              </ul>
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </>
          ) : (
            <div className="text-center text-xlys-gray py-10">
              <p>暂无文章，请上传文章到 public/articles 目录</p>
              <p className="text-xs mt-2">并在文章头部设置 section: ["金石资讯", "社员动态"]</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsMemberPage;
