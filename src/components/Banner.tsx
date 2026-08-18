import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../lib/articleData';
import { getArticleUrl } from '../lib/articles';

const defaultBanners = [
  { title: '金石篆刻社欢迎您', filename: 'default1', headerImg: '' },
  { title: '弘扬传统篆刻文化', filename: 'default2', headerImg: '' },
  { title: '丰富校园文化生活', filename: 'default3', headerImg: '' }
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const newsArticles = articles.filter(article => article.section.includes('金石资讯'));
  const bannerData = newsArticles.length > 0 ? newsArticles.slice(0, 6) : defaultBanners;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerData.length]);

  return (
    <div className="relative w-full lg:w-[700px] h-64 sm:h-80 lg:h-[350px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerData.map((item, index) => (
          <Link key={index} to={getArticleUrl(item.filename)} className="w-full h-full flex-shrink-0 relative">
            {item.headerImg ? (
              <img
                src={item.headerImg}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full img-placeholder flex items-center justify-center">
                <span className="text-xlys-gray text-sm">轮播图 {index + 1}: {item.title}</span>
              </div>
            )}

          </Link>
        ))}
      </div>
      {/* 底部文字 + 右侧圆点进度条，垂直对齐 */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-2 flex items-center justify-between">
        <span className="text-white text-sm line-clamp-1">{bannerData[currentIndex]?.title}</span>
        <div className="flex space-x-3">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;