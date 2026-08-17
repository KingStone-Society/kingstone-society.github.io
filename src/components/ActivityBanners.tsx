import React from 'react';
import { Link } from 'react-router-dom';

const banners = [
  {
    title: '春季雅集',
    searchQuery: '春日雅集',
    width: '343px'
  },
  {
    title: '金石篆刻社四周年社庆系列活动',
    searchQuery: '社庆',
    width: '473px'
  },
  {
    title: '秋季雅集',
    searchQuery: '秋季雅集',
    width: '340px'
  }
];

const ActivityBanners: React.FC = () => {
  return (
    <div className="flex space-x-[22px] mt-4">
      {banners.map((banner, index) => (
        <Link
          key={index}
          to={`/search?q=${encodeURIComponent(banner.searchQuery)}`}
          className="block h-[60px] bg-gradient-to-r from-xlys-red to-xlys-red-dark flex items-center justify-center text-white font-bold text-sm hover:opacity-90 transition-opacity"
          style={{ width: banner.width }}
        >
          {banner.title}
        </Link>
      ))}
    </div>
  );
};

export default ActivityBanners;
