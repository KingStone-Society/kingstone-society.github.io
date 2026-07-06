import React from 'react';

const seminarItems = [
  {
    category: '研讨文集',
    title: '"重文"及几种特殊符号--兼及"重文"等在篆刻创作中的应用',
    href: '#'
  },
  {
    category: '研讨文集',
    title: '苏轼石鼓文研究考',
    href: '#'
  },
  {
    category: '研讨文集',
    title: '新见汪启淑辑《飞鸿堂印余》考',
    href: '#'
  },
  {
    category: '研讨文集',
    title: '印谱书目分类的流变与浅见',
    href: '#'
  }
];

const journalItems = [
  {
    category: '金石艺丛',
    title: '"典籍收藏印研究"专题',
    href: '#'
  },
  {
    category: '金石艺丛',
    title: '"余绍宋研究"专题',
    href: '#'
  },
  {
    category: '金石艺丛',
    title: '"陈锡钧金石鉴藏研究"专题',
    href: '#'
  }
];

const AcademicResources: React.FC = () => {
  return (
    <div className="w-[343px] p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xlys-dark font-bold text-lg">学术资源</h3>
        <a href="#" className="text-xlys-red text-sm flex items-center">
          <span>更多</span>
          <span className="ml-1">&gt;&gt;</span>
        </a>
      </div>
      <div className="space-y-3">
        <ul className="space-y-2">
          {seminarItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <a href="#" className="text-xlys-red text-xs mr-2 flex-shrink-0">[{item.category}]</a>
              <a
                href={item.href}
                className="text-xlys-dark text-sm hover:text-xlys-red truncate"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {journalItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <a href="#" className="text-xlys-brown text-xs mr-2 flex-shrink-0">[{item.category}]</a>
              <a
                href={item.href}
                className="text-xlys-dark text-sm hover:text-xlys-red truncate"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AcademicResources;