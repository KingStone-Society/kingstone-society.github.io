import React from 'react';

const newsItems = [
  {
    title: '招生｜"造像龙门"——金石篆刻社曹祐福造像印研创班',
    href: '#'
  },
  {
    title: '《金石艺丛》入选"第二届中国期刊封面设计精品展"',
    href: '#'
  },
  {
    title: '印说中国故事第二季"印证千秋·河系大运"——大运河主题篆刻艺术巡回邀请展',
    href: '#'
  },
  {
    title: '第二届当代中青年篆刻艺术双年展评审结果公示',
    href: '#'
  }
];

const NewsSection: React.FC = () => {
  return (
    <div className="w-[400px] p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xlys-dark font-bold text-lg">金石资讯</h3>
        <a href="#" className="text-xlys-red text-sm flex items-center">
          <span>更多</span>
          <span className="ml-1">&gt;&gt;</span>
        </a>
      </div>
      <div className="mb-4">
        <h4 className="text-xlys-dark font-bold text-sm mb-2">
          <a href="#" className="hover:text-xlys-red">"印信廉"金石书画廉洁文化主题巡展</a>
        </h4>
        <p className="text-xlys-gray text-xs line-clamp-2">
          为深入学习贯彻习近平新时代中国特色社会主义思想，深化新时代廉洁文化建设...
        </p>
      </div>
      <ul className="flex-1 space-y-2 overflow-hidden">
        {newsItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="text-xlys-dark text-sm hover:text-xlys-red block truncate"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-xlys-beige-dark">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 img-placeholder mb-1">
            <span className="text-xs">微信</span>
          </div>
          <span className="text-xs text-xlys-gray">官方微信</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 img-placeholder mb-1">
            <span className="text-xs">微博</span>
          </div>
          <span className="text-xs text-xlys-gray">官方微博</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 img-placeholder mb-1">
            <span className="text-xs">手机</span>
          </div>
          <span className="text-xs text-xlys-gray">手机版</span>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;