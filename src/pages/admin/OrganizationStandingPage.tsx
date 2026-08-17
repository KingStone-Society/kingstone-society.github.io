import React from 'react';
import { Link } from 'react-router-dom';

const OrganizationStandingPage: React.FC = () => {
  return (
    <div className="flex gap-4">
      <div className="w-[200px]">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <h3 className="text-xlys-dark font-bold text-lg mb-4">组织架构</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/organization" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">社务委员会</Link>
            </li>
            <li>
              <Link to="/organization/standing" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">社团智库</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <div className="flex items-center text-xs text-xlys-gray mb-6">
            <span>当前位置：</span>
            <Link to="/" className="hover:text-xlys-red">首页</Link>
            <span> &gt; </span>
            <Link to="/organization" className="hover:text-xlys-red">组织架构</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">社团智库</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">社团智库</h2>
          <div className="text-xlys-dark text-sm leading-relaxed">
            <p className="mb-4">社团智库全称“金石篆刻社团智慧社务研究中心”，是社务委员会的常设机构，在社务委员会闭会期间行使其职权。社团智库由逊位的前社长、副社长组成。社团智库还负责针对社务委员会较为困难或无力处理的事务提供建议。</p>
            <p className="mb-4">主要职责：</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>根据社务委员会的题名，考查并决定新一期社长</li>
              <li>召集和主持社务委员会会议</li>
              <li>在规定的紧急情况时介入社团管理</li>
              <li>负责社团长期事务的计划、协调和处理</li>
            </ul>
            <div className="mt-4 bg-xlys-beige/50 rounded p-4">
              <h4 className="text-xlys-dark font-bold text-sm mb-3 border-b border-xlys-beige-dark pb-2">社团智库成员</h4>
              <div className="text-sm">
                <div className="grid grid-cols-2 gap-0">
                  <div className="border-b border-xlys-beige-dark pb-1 mb-1 text-xlys-red font-bold">社长</div>
                  <div className="border-b border-xlys-beige-dark pb-1 mb-1 text-xlys-red font-bold">副社长</div>
                  <div className="py-2 border-b border-xlys-beige-dark/50">
                    <span className="text-xlys-dark">钱牧风</span>
                    <span className="text-xlys-gray text-xs ml-1">（2023.8~2024.9）</span>
                  </div>
                  <div className="py-2 border-b border-xlys-beige-dark/50">
                    <span className="text-xlys-gray"></span>
                  </div>
                  <div className="py-2 border-b border-xlys-beige-dark/50">
                    <span className="text-xlys-dark">刘馨阳</span>
                    <span className="text-xlys-gray text-xs ml-1">（2024.9~2025.9）</span>
                  </div>
                  <div className="py-2 border-b border-xlys-beige-dark/50">
                    <span className="text-xlys-dark">廖翌辰</span>
                  </div>
                  <div className="py-2">
                    <span className="text-xlys-dark">张奕茹</span>
                    <span className="text-xlys-gray text-xs ml-1">（2025.9~2026.9）</span>
                  </div>
                  <div className="py-2">
                    <span className="text-xlys-dark">秦子琪</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationStandingPage;