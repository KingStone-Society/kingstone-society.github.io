import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  {
    name: '首页',
    href: '/',
    children: []
  },
  {
    name: '社团情况',
    href: '/society',
    children: ['社团概况', '创社历史', '历任社长', '社员名录', '大事记']
  },
  {
    name: '信息公告',
    href: '/news',
    children: ['金石资讯', '社员动态', '活动动态', '政务信息', '公告公示']
  },
  {
    name: '学术研讨',
    href: '/academic',
    children: ['研讨文集', '学术征稿']
  },
  {
    name: '金石艺丛',
    href: '/journal',
    children: ['在线社刊', '社刊投稿']
  },
  {
    name: '规章制度',
    href: '/rules',
    children: []
  },
  {
    name: '组织架构',
    href: '/organization',
    children: ['社务委员会', '篆刻研究院', '数字传媒中心', '社友会']
  }
];

const Navigation: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-12 h-12 mr-2">
          <img 
            src="logo.png" 
            alt="金石篆刻社" 
            className="w-full h-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20seal%20engraving%20club%20logo%20red%20circular%20design%20with%20Chinese%20characters&image_size=square';
            }}
          />
        </div>
        <img 
          src="题字.svg?v=20260706" 
          alt="金石篆刻社" 
          className="h-10 w-auto object-contain"
        />
      </div>
      <nav className="flex items-center space-x-1">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <Link
              to={item.href}
              className="text-white hover:text-xlys-gold px-4 py-3 text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
            {item.children.length > 0 && (
              <div
                className={`absolute top-full left-0 bg-white border border-xlys-beige-dark shadow-lg z-50 transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'opacity-100 max-h-64' : 'opacity-0 max-h-0'
                } overflow-hidden`}
              >
                <ul className="py-2">
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link
                        to="#"
                        className="block px-6 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm whitespace-nowrap text-center"
                      >
                        {child}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;