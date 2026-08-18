import React from 'react';
import { Link } from 'react-router-dom';

const banners = [
  {
    title: '春季雅集',
    searchQuery: '春日雅集'
  },
  {
    title: '金石篆刻社四周年社庆系列活动',
    searchQuery: '社庆',
    wide: true
  },
  {
    title: '秋季雅集',
    searchQuery: '秋季雅集'
  }
];

const ActivityBanners: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-[22px] mt-4">
      {banners.map((banner, index) => (
        <Link
          key={index}
          to={`/search?q=${encodeURIComponent(banner.searchQuery)}`}
          className={`block h-[60px] sm:h-14 bg-gradient-to-r from-xlys-red to-xlys-red-dark flex items-center justify-center text-white font-bold text-sm hover:opacity-90 transition-opacity w-full sm:flex-none sm:w-auto sm:px-6 ${
            banner.wide ? 'sm:flex-1' : ''
          }`}
        >
          {banner.title}
        </Link>
      ))}
    </div>
  );
};

export default ActivityBanners;
