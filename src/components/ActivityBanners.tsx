import React from 'react';

const banners = [
  {
    title: '春季雅集',
    href: '#',
    width: '343px'
  },
  {
    title: '金石篆刻社120年社庆系列活动',
    href: '#',
    width: '473px'
  },
  {
    title: '秋季雅集',
    href: '#',
    width: '340px'
  }
];

const ActivityBanners: React.FC = () => {
  return (
    <div className="flex space-x-[22px] mt-4">
      {banners.map((banner, index) => (
        <a
          key={index}
          href={banner.href}
          className="block h-[60px] bg-gradient-to-r from-xlys-red to-xlys-red-dark flex items-center justify-center text-white font-bold text-sm hover:opacity-90 transition-opacity"
          style={{ width: banner.width }}
        >
          {banner.title}
        </a>
      ))}
    </div>
  );
};

export default ActivityBanners;