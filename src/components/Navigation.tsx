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
    children: [
      { name: '社团概况', href: '/society' },
      { name: '师林撷英', href: '/society/history' },
      { name: '历任社长', href: '/society/presidents' },
      { name: '社员名录', href: '/society/members' },
      { name: '大事记', href: '/society/timeline' }
    ]
  },
  {
    name: '金石资讯',
    href: '/news',
    children: [
      { name: '社员动态', href: '/news/member' },
      { name: '活动动态', href: '/news/activity' },
      { name: '政务信息', href: '/news/government' },
      { name: '公告公示', href: '/news/notice' }
    ]
  },
  {
    name: '社务研讨',
    href: '/academic',
    children: [
      { name: '研讨文集', href: '/academic' },
      { name: '社务征稿', href: '/academic/submission' }
    ]
  },
  {
    name: '金石艺丛',
    href: '/journal',
    children: [
      { name: '在线社刊', href: '/journal' },
      { name: '社刊投稿', href: '/journal/submission' }
    ]
  },
  {
    name: '规章制度',
    href: '/rules',
    children: []
  },
  {
    name: '组织架构',
    href: '/organization',
    children: [
      { name: '社务委员会', href: '/organization' },
      { name: '社团智库', href: '/organization/standing' }
    ]
  }
];

const Navigation: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubIndex, setMobileSubIndex] = useState<number | null>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSubIndex(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 mr-2">
            <img
              src="/logo.png"
              alt="金石篆刻社"
              className="w-full h-full object-contain"
            />
          </div>
          <img
            src="/题字.svg?v=20260706"
            alt="金石篆刻社"
            className="h-10 w-auto object-contain"
          />
        </div>
        <nav className="hidden lg:flex items-center space-x-1">
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
                  style={{ transitionDuration: '600ms' }}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-xlys-beige-dark shadow-lg z-50 transition-all ease-in-out ${
                    activeIndex === index ? 'opacity-100 max-h-64' : 'opacity-0 max-h-0'
                  } overflow-hidden`}
                >
                  <ul className="py-2">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link
                          to={child.href}
                          className="block px-6 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm whitespace-nowrap text-center"
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-3 focus:outline-none"
          aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <nav className="lg:hidden bg-xlys-red-dark border-t border-white/20">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <Link
                    to={item.href}
                    onClick={closeMobile}
                    className="flex-1 block px-5 py-3 text-white text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                  {item.children.length > 0 && (
                    <button
                      onClick={() => setMobileSubIndex(mobileSubIndex === index ? null : index)}
                      className="px-4 py-3 text-white/80 focus:outline-none"
                      aria-label={`展开${item.name}子菜单`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={mobileSubIndex === index ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {mobileSubIndex === index && (
                  <ul className="bg-black/20 py-1">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link
                          to={child.href}
                          onClick={closeMobile}
                          className="block px-8 py-2.5 text-white/90 text-sm hover:text-xlys-gold"
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
