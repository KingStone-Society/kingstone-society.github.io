import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { articles } from '../lib/articleData';
import { formatDate, getArticleUrl } from '../lib/articles';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState(articles);

  useEffect(() => {
    const searchTerm = query.toLowerCase();
    if (searchTerm) {
      const filtered = articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm) ||
        article.subtitle.toLowerCase().includes(searchTerm) ||
        article.author.toLowerCase().includes(searchTerm) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        article.section.some(s => s.toLowerCase().includes(searchTerm))
      );
      setResults(filtered);
    } else {
      setResults(articles);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-[200px]">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <h3 className="text-xlys-dark font-bold text-lg mb-4">搜索</h3>
          <form onSubmit={handleSearch} className="mb-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="输入关键词..."
              className="w-full px-3 py-2 text-sm border border-xlys-beige-dark focus:border-xlys-red outline-none"
            />
            <button
              type="submit"
              className="w-full mt-2 bg-xlys-red text-white px-3 py-2 text-sm hover:bg-xlys-red-dark transition-colors"
            >
              搜索
            </button>
          </form>
          <div className="border-t border-xlys-beige-dark pt-4">
            <h4 className="text-xlys-dark font-bold text-sm mb-2">热门搜索</h4>
            <div className="space-y-1">
              {['篆刻', '社团', '传承', '社长', '活动'].map((tag, index) => (
                <Link
                  key={index}
                  to={`/search?q=${encodeURIComponent(tag)}`}
                  className="block text-xlys-gray text-xs hover:text-xlys-red"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-xlys-beige-dark pt-4 mt-4">
            <h4 className="text-xlys-dark font-bold text-sm mb-2">标签云</h4>
            <div className="flex flex-wrap gap-1">
              {['社团', '管理', '文学', '活动', '传承', '历史'].map((tag, index) => (
                <Link
                  key={index}
                  to={`/search?q=${encodeURIComponent(tag)}`}
                  className="text-xlys-red text-xs border border-xlys-red px-2 py-0.5 hover:bg-xlys-red hover:text-white transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <div className="flex items-center text-xs text-xlys-gray mb-6">
            <span>当前位置：</span>
            <Link to="/" className="hover:text-xlys-red">首页</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">搜索</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">搜索结果</h2>
          {query && (
            <p className="text-xlys-gray text-sm mb-4">搜索关键词：<span className="text-xlys-red">{query}</span>，共找到 {results.length} 篇文章</p>
          )}
          {results.length > 0 ? (
            <div className="space-y-4">
              {results.map((article, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-xlys-beige-dark last:border-b-0">
                  <div className="w-24 h-20 sm:w-32 sm:h-24 flex-shrink-0 overflow-hidden">
                    {article.headerImg ? (
                      <img src={article.headerImg} alt={article.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full img-placeholder flex items-center justify-center">
                        <span className="text-xs">封面图</span>
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
                    <div className="flex items-center gap-4">
                      <span className="text-xlys-gray text-xs">{formatDate(article.date)}</span>
                      <span className="text-xlys-gray text-xs">· {article.author}</span>
                      <div className="flex gap-1">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xlys-red text-xs">[{tag}]</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-xlys-gray py-10">
              <p>未找到相关文章</p>
              <p className="text-xs mt-2">请尝试其他关键词</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;