import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useJsonData } from '../../hooks/useJsonData';

interface Generation {
  name: string;
  members: string[];
}

const SocietyMembersPage: React.FC = () => {
  const [selectedGeneration, setSelectedGeneration] = useState('第1届');
  const { data, loading } = useJsonData<{ generations: Generation[] }>('/data/members.json');
  const generations = data?.generations || [];
  const currentGeneration = generations.find((g) => g.name === selectedGeneration) || { name: selectedGeneration, members: [] };

  if (loading) {
    return <div className="bg-white border border-xlys-beige-dark p-4 text-xlys-gray text-sm text-center">加载中…</div>;
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
              <Link to="/society/presidents" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">历任社长</Link>
            </li>
            <li className="flex-1 lg:flex-none">
              <Link to="/society/members" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">社员名录</Link>
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
            <span className="text-xlys-red">社员名录</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">社员名录</h2>
          <div className="relative inline-block mb-6">
            <select
              value={selectedGeneration}
              onChange={(e) => setSelectedGeneration(e.target.value)}
              className="appearance-none bg-xlys-red text-white px-6 py-2 text-sm font-bold cursor-pointer pr-10 border-none outline-none"
            >
              {generations.map((generation) => (
                <option key={generation.name} value={generation.name} className="bg-white text-xlys-dark">
                  {generation.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="border border-xlys-beige-dark p-4">
            <h4 className="text-xlys-dark font-bold text-sm mb-4">{selectedGeneration}社员名单</h4>
            {currentGeneration.members.length > 0 ? (
              <div className="columns-3 lg:columns-4 gap-4 space-y-2">
                {currentGeneration.members.map((name, index) => (
                  <div key={index} className="text-xlys-dark text-sm break-inside-avoid">{name}</div>
                ))}
              </div>
            ) : (
              <p className="text-xlys-gray text-sm text-center py-8">待导入社员名单</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocietyMembersPage;