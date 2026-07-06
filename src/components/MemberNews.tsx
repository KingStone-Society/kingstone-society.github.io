import React from 'react';

const newsItems = [
  {
    title: '权威发布｜2025年度金石篆刻社新社员名单（三）',
    href: '#'
  },
  {
    title: '权威发布｜2025年度金石篆刻社新社员名单（二）',
    href: '#'
  },
  {
    title: '两宋文人书迹拓本展暨金石篆刻社社员篆刻作品展近日开幕',
    href: '#'
  },
  {
    title: '从岭南到江南——金石篆刻社社员作品展',
    href: '#'
  },
  {
    title: '金石篆刻社国际交流活动',
    href: '#'
  },
  {
    title: '金石永寿 艺魂长存｜追忆金石篆刻社名誉副社长',
    href: '#'
  }
];

const MemberNews: React.FC = () => {
  return (
    <div className="w-[473px] p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xlys-dark font-bold text-lg">社员动态</h3>
        <a href="#" className="text-xlys-red text-sm flex items-center">
          <span>更多</span>
          <span className="ml-1">&gt;&gt;</span>
        </a>
      </div>
      <div className="flex gap-3 mb-4">
        <div className="w-24 h-24 img-placeholder flex-shrink-0">
          <span className="text-xs">新闻图片</span>
        </div>
        <div className="flex-1">
          <h4 className="text-xlys-dark font-bold text-sm mb-1 line-clamp-1">
            <a href="#" className="hover:text-xlys-red">权威发布｜2025年度金石篆刻社新社员名单（一）</a>
          </h4>
          <p className="text-xlys-gray text-xs line-clamp-3">
            依据《金石篆刻社章程》和《金石篆刻社社员发展工作实施细则》，金石篆刻社于2025年10月31日召开了...
          </p>
        </div>
      </div>
      <div className="columns-2 space-y-2">
        {newsItems.map((item, index) => (
          <li key={index} className="break-inside-avoid">
            <a
              href={item.href}
              className="text-xlys-dark text-sm hover:text-xlys-red block truncate"
            >
              {item.title}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default MemberNews;