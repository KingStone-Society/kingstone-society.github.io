import React from 'react';
import { Link } from 'react-router-dom';

const RulesPage: React.FC = () => {
  return (
    <div className="bg-white border border-xlys-beige-dark p-4">
      <div className="flex items-center text-xs text-xlys-gray mb-6">
        <span>当前位置：</span>
        <Link to="/" className="hover:text-xlys-red">首页</Link>
        <span> &gt; </span>
        <span className="text-xlys-red">规章制度</span>
      </div>
      <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">规章制度</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4 pb-4 border-b border-xlys-beige-dark">
          <div className="w-16 h-16 img-placeholder flex-shrink-0">
            <span className="text-xs">章程</span>
          </div>
          <div className="flex-1">
            <h4 className="text-xlys-dark font-bold text-sm mb-1">
              <Link to="#" className="hover:text-xlys-red">金石篆刻社章程</Link>
            </h4>
            <p className="text-xlys-gray text-xs">2025年修订版</p>
          </div>
        </div>
        <div className="flex items-center gap-4 pb-4 border-b border-xlys-beige-dark">
          <div className="w-16 h-16 img-placeholder flex-shrink-0">
            <span className="text-xs">细则</span>
          </div>
          <div className="flex-1">
            <h4 className="text-xlys-dark font-bold text-sm mb-1">
              <Link to="#" className="hover:text-xlys-red">社员发展工作实施细则</Link>
            </h4>
            <p className="text-xlys-gray text-xs">2025年修订版</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 img-placeholder flex-shrink-0">
            <span className="text-xs">规定</span>
          </div>
          <div className="flex-1">
            <h4 className="text-xlys-dark font-bold text-sm mb-1">
              <Link to="#" className="hover:text-xlys-red">印章使用管理规定</Link>
            </h4>
            <p className="text-xlys-gray text-xs">2024年制定</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;