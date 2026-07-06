import React from 'react';
import { Link } from 'react-router-dom';

const newsList = [
  {
    date: '2025-10-31',
    title: '权威发布｜2025年度金石篆刻社新社员名单（一）',
    href: '#'
  },
  {
    date: '2025-10-28',
    title: '招生｜"造像龙门"——金石篆刻社曹祐福造像印研创班',
    href: '#'
  },
  {
    date: '2025-10-25',
    title: '《金石艺丛》入选"第二届中国期刊封面设计精品展"',
    href: '#'
  },
  {
    date: '2025-10-20',
    title: '印说中国故事第二季"印证千秋·河系大运"——大运河主题篆刻艺术巡回邀请展',
    href: '#'
  },
  {
    date: '2025-10-15',
    title: '第二届当代中青年篆刻艺术双年展评审结果公示',
    href: '#'
  },
  {
    date: '2025-10-10',
    title: '"印信廉"金石书画廉洁文化主题巡展',
    href: '#'
  }
];

const NewsPage: React.FC = () => {
  return (
    <div className="flex gap-4">
        <div className="w-[200px] bg-white border border-xlys-beige-dark">
          <div className="p-4 border-b border-xlys-beige-dark bg-xlys-beige">
            <h3 className="text-xlys-dark font-bold">信息公告</h3>
          </div>
          <ul className="p-2">
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-red bg-xlys-beige text-sm">金石资讯</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm">社员动态</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm">活动动态</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm">政务信息</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm">公告公示</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-white border border-xlys-beige-dark p-4">
          <div className="flex items-center text-xs text-xlys-gray mb-6">
            <span>当前位置：</span>
            <Link to="/" className="hover:text-xlys-red">首页</Link>
            <span> &gt; </span>
            <Link to="/news" className="hover:text-xlys-red">信息公告</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">金石资讯</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xlys-dark font-bold text-xl">金石资讯</h2>
            <Link to="#" className="text-xlys-red text-sm flex items-center">
              <span>更多</span>
              <span className="ml-1">&gt;&gt;</span>
            </Link>
          </div>
          <ul className="space-y-4">
            {newsList.map((item, index) => (
              <li key={index} className="flex items-start gap-4 pb-4 border-b border-xlys-beige-dark last:border-0">
                <span className="text-xlys-gray text-xs flex-shrink-0 mt-1">{item.date}</span>
                <Link
                  to={item.href}
                  className="text-xlys-dark text-sm hover:text-xlys-red flex-1"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2">
              <span className="text-xlys-gray text-xs">首页</span>
              <span className="text-xlys-red text-xs bg-xlys-beige px-2 py-1">1</span>
              <span className="text-xlys-gray text-xs">2</span>
              <span className="text-xlys-gray text-xs">3</span>
              <span className="text-xlys-gray text-xs">末页</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default NewsPage;