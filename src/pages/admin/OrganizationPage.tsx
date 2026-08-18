import React from 'react';
import { Link } from 'react-router-dom';
import { useJsonData } from '../../hooks/useJsonData';

interface CommitteeMember {
  role: string;
  name: string;
  term: string;
}

interface OrganizationData {
  introduction: string;
  duties: string[];
  committee: CommitteeMember[];
}

const OrganizationPage: React.FC = () => {
  const { data, loading } = useJsonData<OrganizationData>('/data/organization.json');

  if (loading) {
    return <div className="bg-white border border-xlys-beige-dark p-4 text-xlys-gray text-sm text-center">加载中…</div>;
  }

  if (!data) {
    return <div className="bg-white border border-xlys-beige-dark p-4 text-xlys-gray text-sm text-center">数据加载失败</div>;
  }

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
            <p className="mb-4">{data.introduction}</p>
            <p className="mb-4">主要职责：</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              {data.duties.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>
            <div className="mt-4 bg-xlys-beige/50 rounded p-4">
              <h4 className="text-xlys-dark font-bold text-sm mb-3 border-b border-xlys-beige-dark pb-2">时任社务委员会名单</h4>
              <div className="space-y-2 text-sm">
                {data.committee.map((member) => (
                  <div key={member.role} className="flex items-center gap-3">
                    <span className="text-xlys-red font-bold w-16 text-right">{member.role}：</span>
                    <span className="text-xlys-dark">{member.name}</span>
                    <span className="text-xlys-gray text-xs">（{member.term}）</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationPage;
