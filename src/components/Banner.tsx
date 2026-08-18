import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../lib/articleData';
import { getArticleUrl } from '../lib/articles';

const defaultBanners = [
  { title: '金石篆刻社欢迎您', filename: 'default1', headerImg: '' },
  { title: '弘扬传统篆刻文化', filename: 'default2', headerImg: '' },
  { title: '丰富校园文化生活', filename: 'default3', headerImg: '' }
];

const SWIPE_THRESHOLD = 60;

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const suppressClickRef = useRef(false);
  const newsArticles = articles.filter(article => article.section.includes('金石资讯'));
  const bannerData = newsArticles.length > 0 ? newsArticles.slice(0, 6) : defaultBanners;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerData.length, paused]);

  const startDrag = (x: number) => {
    setDragStartX(x);
    setDragOffset(0);
    setIsDragging(true);
    setPaused(true);
  };

  const moveDrag = (x: number) => {
    if (dragStartX === null) return;
    setDragOffset(x - dragStartX);
  };

  const endDrag = () => {
    if (dragStartX === null) return;
    if (Math.abs(dragOffset) > SWIPE_THRESHOLD) {
      if (dragOffset > 0) {
        setCurrentIndex((prev) => (prev - 1 + bannerData.length) % bannerData.length);
      } else {
        setCurrentIndex((prev) => (prev + 1) % bannerData.length);
      }
      suppressClickRef.current = true;
    } else if (Math.abs(dragOffset) > 10) {
      // 拖动过但未达阈值，归位且不触发跳转
      suppressClickRef.current = true;
    }
    setDragStartX(null);
    setDragOffset(0);
    setIsDragging(false);
    setPaused(false);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (suppressClickRef.current) {
      e.preventDefault();
      suppressClickRef.current = false;
    }
  };

  return (
    <div
      className="relative w-full lg:w-[700px] aspect-video overflow-hidden select-none touch-pan-y"
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      onTouchMove={(e) => { if (dragStartX !== null) moveDrag(e.touches[0].clientX); }}
      onTouchEnd={endDrag}
      onMouseDown={(e) => startDrag(e.clientX)}
      onMouseMove={(e) => { if (isDragging) moveDrag(e.clientX); }}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
    >
      <div
        className={`flex h-full ${isDragging ? '' : 'transition-transform duration-500 ease-in-out'}`}
        style={{ transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))` }}
      >
        {bannerData.map((item, index) => (
          <Link
            key={index}
            to={getArticleUrl(item.filename)}
            onClick={handleLinkClick}
            draggable={false}
            className="w-full h-full flex-shrink-0 relative"
          >
            {item.headerImg ? (
              <img
                src={item.headerImg}
                alt={item.title}
                draggable={false}
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
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-2 sm:py-2 flex items-center justify-between">
        <span className="text-white text-sm line-clamp-1">{bannerData[currentIndex]?.title}</span>
        <div className="flex space-x-4 sm:space-x-3">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-4 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-16 sm:w-8' : 'bg-white/40 w-4 sm:w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
