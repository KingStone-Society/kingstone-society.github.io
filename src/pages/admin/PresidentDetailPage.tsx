import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useJsonData } from '../../hooks/useJsonData';

interface PresidentDetail {
  name: string;
  term: string;
  photo: string;
  introduction: string[];
  achievements: string[];
}

const PresidentDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { data, loading } = useJsonData<{ presidents: PresidentDetail[] }>('/data/presidents.json');
  const president = data?.presidents.find((p) => p.name === name) || null;

  if (loading) {
    return <div className="bg-white border border-xlys-beige-dark p-4 text-xlys-gray text-sm text-center">加载中…</div>;
  }

  if (!president) {
    return (
      <div className="bg-white border border-xlys-beige-dark p-4">
        <p className="text-xlys-gray">社长信息不存在</p>
        <Link to="/society/presidents" className="text-xlys-red hover:underline">返回历任社长</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-[200px]">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <h3 className="text-xlys-dark font-bold text-lg mb-4">社团情况</h3>
          <ul className="flex flex-wrap gap-2 lg:block lg:space-y-2">
            <li className="flex-1 lg:flex-none">
              <Link to="/society" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">社团概况</Link>
            </li>
            <li className="flex-1 lg:flex-none">
              <Link to="/society/history" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">师林撷英</Link>
            </li>
            <li className="flex-1 lg:flex-none">
              <Link to="/society/presidents" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">历任社长</Link>
            </li>
            <li className="flex-1 lg:flex-none">
              <Link to="/society/members" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">社员名录</Link>
            </li>
            <li className="flex-1 lg:flex-none">
              <Link to="/society/timeline" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">大事记</Link>
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
            <Link to="/society" className="hover:text-xlys-red">社团情况</Link>
            <span> &gt; </span>
            <Link to="/society/presidents" className="hover:text-xlys-red">历任社长</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">{president.name}</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">{president.name}</h2>
          <div className="flex gap-6">
            <div className="w-36 h-48 flex-shrink-0 bg-xlys-beige">
              {president.photo ? (
                <img src={president.photo} alt={president.name} className="w-full h-full object-contain" />
              ) : (
                <div className="w-full h-full img-placeholder flex items-center justify-center">
                  <span className="text-xs">{president.name}</span>
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <span className="text-xlys-red text-sm font-bold">{president.term}</span>
              </div>
              <div className="mb-6">
                <h4 className="text-xlys-dark font-bold text-sm mb-2">个人简介</h4>
                <div className="space-y-2">
                  {Array.isArray(president.introduction) ? (
                    president.introduction.map((para, idx) => (
                      <p key={idx} className="text-xlys-gray text-sm leading-relaxed text-indent-8">
                        {para}
                      </p>
                    ))
                  ) : (
                    <p className="text-xlys-gray text-sm leading-relaxed text-indent-8">
                      {president.introduction}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <h4 className="text-xlys-dark font-bold text-sm mb-2">主要成就</h4>
                <ul className="space-y-2">
                  {president.achievements.map((achievement, index) => (
                    <li key={index} className="text-xlys-gray text-sm flex items-start">
                      <span className="text-xlys-red mr-2">●</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentDetailPage;
