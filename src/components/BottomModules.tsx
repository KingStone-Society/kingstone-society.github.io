import React from 'react';

const modules = [
  {
    title: '视频中心',
    href: '#'
  },
  {
    title: '名家讲堂',
    href: '#'
  },
  {
    title: '社藏菁华',
    href: '#'
  }
];

const exhibitionItems = [
  {
    title: '展厅1',
    href: '#'
  },
  {
    title: '展厅2',
    href: '#'
  }
];

const BottomModules: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-[14px] mt-4">
      {modules.map((module, index) => (
        <div key={index} className="w-full">
          <div className="p-2">
            <a href={module.href} className="text-xlys-dark font-bold text-sm">
              {module.title}
            </a>
          </div>
          <div className="relative">
            <div className="w-full h-32 img-placeholder">
              <span className="text-xs">待办</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
              <span className="text-white text-xs">待办</span>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full">
        <div className="p-2">
          <a href="#" className="text-xlys-dark font-bold text-sm">在线展厅</a>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2">
          {exhibitionItems.map((_item, index) => (
            <div key={index} className="relative">
              <div className="w-full h-28 img-placeholder">
                <span className="text-xs">待办</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1">
                <span className="text-white text-xs">待办</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomModules;