import React from 'react';
import { Link } from 'react-router-dom';

const banners = [
  {
    title: '春季雅集',
    searchQuery: '春日雅集'
  },
  {
    title: '金石篆刻社四周年社庆系列活动',
    searchQuery: '社庆'
  },
  {
    title: '秋季雅集',
    searchQuery: '秋季雅集'
  }
];

const ActivityBanners: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-[22px] mt-4">
      {banners.map((banner, index) => (
        <Link
          key={index}
          to={`/search?q=${encodeURIComponent(banner.searchQuery)}`}
          className="flex items-center justify-center h-14 sm:h-16 bg-gradient-to-r from-xlys-red to-xlys-red-dark text-white font-bold text-base sm:text-sm text-center px-3 hover:opacity-90 transition-opacity"
        >
          {banner.title}
        </Link>
      ))}
    </div>
  );
};

export default ActivityBanners;
