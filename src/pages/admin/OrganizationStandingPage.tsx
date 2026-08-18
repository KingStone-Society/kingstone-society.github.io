import React from 'react';
import { Link } from 'react-router-dom';
import { useJsonData } from '../../hooks/useJsonData';

interface StandingMember {
  president: { name: string; term: string };
  vice: { name: string };
}

interface StandingData {
  introduction: string;
  duties: string[];
  members: StandingMember[];
}

const OrganizationStandingPage: React.FC = () => {
  const { data, loading } = useJsonData<StandingData>('/data/standing.json');

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
            <p className="mb-4">{data.introduction}</p>
            <p className="mb-4">主要职责：</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              {data.duties.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>
            <div className="mt-4 bg-xlys-beige/50 rounded p-4">
              <h4 className="text-xlys-dark font-bold text-sm mb-3 border-b border-xlys-beige-dark pb-2">社团智库成员</h4>
              <div className="text-sm">
                <div className="grid grid-cols-2 gap-0">
                  <div className="border-b border-xlys-beige-dark pb-1 mb-1 text-xlys-red font-bold">社长</div>
                  <div className="border-b border-xlys-beige-dark pb-1 mb-1 text-xlys-red font-bold">副社长</div>
                  {data.members.map((member, index) => (
                    <React.Fragment key={index}>
                      <div className={`py-2 ${index < data.members.length - 1 ? 'border-b border-xlys-beige-dark/50' : ''}`}>
                        <span className="text-xlys-dark">{member.president.name}</span>
                        {member.president.term && (
                          <span className="text-xlys-gray text-xs ml-1">（{member.president.term}）</span>
                        )}
                      </div>
                      <div className={`py-2 ${index < data.members.length - 1 ? 'border-b border-xlys-beige-dark/50' : ''}`}>
                        <span className="text-xlys-gray">{member.vice.name || ''}</span>
                      </div>
                    </React.Fragment>
                  ))}
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