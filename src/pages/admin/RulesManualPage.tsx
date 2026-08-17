import React from 'react';
import { Link } from 'react-router-dom';

const RulesManualPage: React.FC = () => {
  return (
    <div className="bg-white border border-xlys-beige-dark p-4">
      <div className="flex items-center text-xs text-xlys-gray mb-6">
        <span>当前位置：</span>
        <Link to="/" className="hover:text-xlys-red">首页</Link>
        <span> &gt; </span>
        <Link to="/rules" className="hover:text-xlys-red">规章制度</Link>
        <span> &gt; </span>
        <span className="text-xlys-red">社务手册</span>
      </div>
      <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">社务手册</h2>
      <iframe
        src="/篆刻社社务手册.pdf"
        className="w-full border border-xlys-beige-dark rounded"
        style={{ height: '80vh' }}
        title="篆刻社社务手册"
      />
    </div>
  );
};

export default RulesManualPage;
