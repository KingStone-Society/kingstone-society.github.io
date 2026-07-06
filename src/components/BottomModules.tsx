import React from 'react';

const modules = [
  {
    title: '视频中心',
    subtitle: '金石群星谱',
    href: '#',
    width: '230px'
  },
  {
    title: '名家讲堂',
    subtitle: '金石名家公益讲座',
    href: '#',
    width: '230px'
  },
  {
    title: '社藏菁华',
    subtitle: '清张熊·花卉扇面',
    href: '#',
    width: '230px'
  }
];

const exhibitionItems = [
  {
    title: '《红色印迹》作品欣赏',
    href: '#'
  },
  {
    title: '金石印学博物馆云展厅',
    href: '#'
  }
];

const BottomModules: React.FC = () => {
  return (
    <div className="flex gap-[14px] mt-4">
      {modules.map((module, index) => (
        <div key={index} style={{ width: module.width }}>
          <div className="p-2">
            <a href={module.href} className="text-xlys-dark font-bold text-sm">
              {module.title}
            </a>
          </div>
          <div className="relative">
            <div className="w-full h-32 img-placeholder">
              <span className="text-xs">{module.title}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
              <span className="text-white text-xs">{module.subtitle}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="w-[468px]">
        <div className="p-2">
          <a href="#" className="text-xlys-dark font-bold text-sm">在线展厅</a>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2">
          {exhibitionItems.map((item, index) => (
            <div key={index} className="relative">
              <div className="w-full h-28 img-placeholder">
                <span className="text-xs">展厅{index + 1}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1">
                <span className="text-white text-xs">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomModules;