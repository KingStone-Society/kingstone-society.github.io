import React from 'react';
import { Link } from 'react-router-dom';

const seminarItems = [
  {
    title: '"重文"及几种特殊符号--兼及"重文"等在篆刻创作中的应用',
    author: '张三',
    date: '2025-10'
  },
  {
    title: '苏轼石鼓文研究考',
    author: '李四',
    date: '2025-09'
  },
  {
    title: '新见汪启淑辑《飞鸿堂印余》考',
    author: '王五',
    date: '2025-08'
  },
  {
    title: '印谱书目分类的流变与浅见',
    author: '赵六',
    date: '2025-07'
  }
];

const AcademicPage: React.FC = () => {
  return (
    <div className="flex gap-4">
        <div className="w-[200px] bg-white border border-xlys-beige-dark">
          <div className="p-4 border-b border-xlys-beige-dark bg-xlys-beige">
            <h3 className="text-xlys-dark font-bold">学术研讨</h3>
          </div>
          <ul className="p-2">
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-red bg-xlys-beige text-sm">研讨文集</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm">学术征稿</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-white border border-xlys-beige-dark p-4">
          <div className="flex items-center text-xs text-xlys-gray mb-6">
            <span>当前位置：</span>
            <Link to="/" className="hover:text-xlys-red">首页</Link>
            <span> &gt; </span>
            <Link to="/academic" className="hover:text-xlys-red">学术研讨</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">研讨文集</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xlys-dark font-bold text-xl">研讨文集</h2>
            <Link to="#" className="text-xlys-red text-sm flex items-center">
              <span>更多</span>
              <span className="ml-1">&gt;&gt;</span>
            </Link>
          </div>
          <div className="space-y-4">
            {seminarItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4 pb-4 border-b border-xlys-beige-dark last:border-0">
                <div className="w-20 h-20 img-placeholder flex-shrink-0">
                  <span className="text-xs">封面</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xlys-dark font-bold text-sm mb-1">
                    <Link to="#" className="hover:text-xlys-red">{item.title}</Link>
                  </h4>
                  <p className="text-xlys-gray text-xs">
                    作者：{item.author} | {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default AcademicPage;