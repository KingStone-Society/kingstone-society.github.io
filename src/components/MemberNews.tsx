import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../lib/articleData';
import { formatDate, getArticleUrl } from '../lib/articles';

const MemberNews: React.FC = () => {
  const memberArticles = articles.filter(article => 
    article.section.includes('金石资讯') && article.section.includes('社员动态')
  );

  return (
    <div className="w-full lg:w-[473px] p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xlys-dark font-bold text-lg">社员动态</h3>
        <Link to="/news/member" className="text-xlys-red text-sm flex items-center">
          <span>更多</span>
          <span className="ml-1">&gt;&gt;</span>
        </Link>
      </div>
      {memberArticles.length > 0 ? (
        <>
          <div className="flex gap-3 mb-4">
            <div className="w-32 h-32 sm:w-24 sm:h-24 flex-shrink-0 overflow-hidden">
              {memberArticles[0].headerImg ? (
                <img src={memberArticles[0].headerImg} alt={memberArticles[0].title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full img-placeholder flex items-center justify-center">
                  <span className="text-xs">新闻图片</span>
                </div>
              )}
            </div>
            <div className="flex-1">
              <h4 className="text-xlys-dark font-bold text-sm mb-1 line-clamp-1">
                <Link to={getArticleUrl(memberArticles[0].filename)} className="hover:text-xlys-red">{memberArticles[0].title}</Link>
              </h4>
              <p className="text-xlys-gray text-xs line-clamp-3">
                {memberArticles[0].subtitle || '点击查看详情'}
              </p>
            </div>
          </div>
          <div className="columns-1 sm:columns-2 space-y-2">
            {memberArticles.slice(1).map((item, index) => (
              <li key={index} className="break-inside-avoid">
                <Link
                  to={getArticleUrl(item.filename)}
                  className="text-xlys-dark text-sm hover:text-xlys-red block truncate"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center text-xlys-gray py-10">
          <p>暂无文章，请上传文章到 public/articles 目录</p>
        </div>
      )}
    </div>
  );
};

export default MemberNews;