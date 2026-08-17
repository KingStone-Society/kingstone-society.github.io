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
        <div className="pb-4 border-b border-xlys-beige-dark">
          <h4 className="text-xlys-dark font-bold text-sm mb-1">
            <Link to="/rules/charter" className="hover:text-xlys-red">金石篆刻社章程</Link>
          </h4>
          <p className="text-xlys-gray text-xs">2026年7月修订版</p>
        </div>
        <div>
          <h4 className="text-xlys-dark font-bold text-sm mb-1">
            <Link to="/rules/manual" className="hover:text-xlys-red">社务手册</Link>
          </h4>
          <p className="text-xlys-gray text-xs">社务工作参考指南</p>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
