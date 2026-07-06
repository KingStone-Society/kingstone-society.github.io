import React from 'react';
import { Link } from 'react-router-dom';

const journalIssues = [
  {
    issue: '2025年第10期',
    title: '"典籍收藏印研究"专题',
    href: '#'
  },
  {
    issue: '2025年第9期',
    title: '"余绍宋研究"专题',
    href: '#'
  },
  {
    issue: '2025年第8期',
    title: '"陈锡钧金石鉴藏研究"专题',
    href: '#'
  },
  {
    issue: '2025年第7期',
    title: '历代印章研究',
    href: '#'
  }
];

const JournalPage: React.FC = () => {
  return (
    <div className="flex gap-4">
        <div className="w-[200px] bg-white border border-xlys-beige-dark">
          <div className="p-4 border-b border-xlys-beige-dark bg-xlys-beige">
            <h3 className="text-xlys-dark font-bold">金石艺丛</h3>
          </div>
          <ul className="p-2">
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-red bg-xlys-beige text-sm">在线社刊</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm">社刊投稿</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-white border border-xlys-beige-dark p-4">
          <div className="flex items-center text-xs text-xlys-gray mb-6">
            <span>当前位置：</span>
            <Link to="/" className="hover:text-xlys-red">首页</Link>
            <span> &gt; </span>
            <Link to="/journal" className="hover:text-xlys-red">金石艺丛</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">在线社刊</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xlys-dark font-bold text-xl">金石艺丛</h2>
            <Link to="#" className="text-xlys-red text-sm flex items-center">
              <span>更多</span>
              <span className="ml-1">&gt;&gt;</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {journalIssues.map((item, index) => (
              <div key={index} className="border border-xlys-beige-dark p-4">
                <div className="w-full h-32 img-placeholder mb-3">
                  <span className="text-xs">封面{index + 1}</span>
                </div>
                <h4 className="text-xlys-dark font-bold text-sm mb-1">
                  <Link to={item.href} className="hover:text-xlys-red">{item.title}</Link>
                </h4>
                <span className="text-xlys-gray text-xs">{item.issue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default JournalPage;