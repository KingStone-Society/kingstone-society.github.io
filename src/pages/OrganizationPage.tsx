import React from 'react';
import { Link } from 'react-router-dom';

const departments = [
  {
    name: '社务委员会',
    description: '负责社团日常管理和决策'
  },
  {
    name: '篆刻研究院',
    description: '负责篆刻艺术研究和创作'
  },
  {
    name: '数字传媒中心',
    description: '负责社团宣传和数字化建设'
  },
  {
    name: '社友会',
    description: '负责社友联络和活动组织'
  }
];

const OrganizationPage: React.FC = () => {
  return (
    <div className="flex gap-4">
        <div className="w-[200px] bg-white border border-xlys-beige-dark">
          <div className="p-4 border-b border-xlys-beige-dark bg-xlys-beige">
            <h3 className="text-xlys-dark font-bold">组织架构</h3>
          </div>
          <ul className="p-2">
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-red bg-xlys-beige text-sm">社务委员会</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm">篆刻研究院</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm">数字传媒中心</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm">社友会</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-white border border-xlys-beige-dark p-4">
          <div className="flex items-center text-xs text-xlys-gray mb-6">
            <span>当前位置：</span>
            <Link to="/" className="hover:text-xlys-red">首页</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">组织架构</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">组织架构</h2>
          <div className="grid grid-cols-2 gap-4">
            {departments.map((dept, index) => (
              <div key={index} className="border border-xlys-beige-dark p-4">
                <div className="w-20 h-20 img-placeholder mx-auto mb-3">
                  <span className="text-xs">{dept.name}</span>
                </div>
                <h4 className="text-xlys-dark font-bold text-sm text-center mb-1">{dept.name}</h4>
                <p className="text-xlys-gray text-xs text-center">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default OrganizationPage;