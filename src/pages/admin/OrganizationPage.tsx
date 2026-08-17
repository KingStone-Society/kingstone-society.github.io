import React from 'react';
import { Link } from 'react-router-dom';

const OrganizationPage: React.FC = () => {
  return (
    <div className="flex gap-4">
      <div className="w-[200px]">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <h3 className="text-xlys-dark font-bold text-lg mb-4">组织架构</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/organization" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">社务委员会</Link>
            </li>
            <li>
              <Link to="/organization/standing" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">社团智库</Link>
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
            <span className="text-xlys-red">社务委员会</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">社务委员会</h2>
          <div className="text-xlys-dark text-sm leading-relaxed">
            <p className="mb-4">社务委员会是金石篆刻社的最高权力机构，负责社团的重大决策和发展规划。委员会由社长、副社长及各部门负责人组成，定期召开会议研究社团事务。</p>
            <p className="mb-4">主要职责：</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>制定和修改社团章程</li>
              <li>选举和罢免社团负责人</li>
              <li>审议社团年度工作计划和总结</li>
              <li>决定社团重大活动和项目</li>
              <li>管理社团财务和资产</li>
            </ul>
            <div className="mt-4 bg-xlys-beige/50 rounded p-4">
              <h4 className="text-xlys-dark font-bold text-sm mb-3 border-b border-xlys-beige-dark pb-2">时任社务委员会名单</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-xlys-red font-bold w-16 text-right">社长：</span>
                  <span className="text-xlys-dark">许伊凯</span>
                  <span className="text-xlys-gray text-xs">（2025.9~2026.9）</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xlys-red font-bold w-16 text-right">副社长：</span>
                  <span className="text-xlys-dark">（/）</span>
                  <span className="text-xlys-gray text-xs">（待组阁确定）</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationPage;
