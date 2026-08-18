import React from 'react';
import { Link } from 'react-router-dom';
import { useJsonData } from '../../hooks/useJsonData';

interface President {
  name: string;
  term: string;
  description: string;
}

const SocietyPresidentsPage: React.FC = () => {
  const { data, loading } = useJsonData<{ presidents: President[] }>('/data/presidents.json');
  const presidents = data?.presidents || [];

  if (loading) {
    return <div className="bg-white border border-xlys-beige-dark p-4 text-xlys-gray text-sm text-center">加载中…</div>;
  }

  return (
    <div className="flex gap-4">
      <div className="w-[200px]">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <h3 className="text-xlys-dark font-bold text-lg mb-4">社团情况</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/society" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">社团概况</Link>
            </li>
            <li>
              <Link to="/society/history" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">师林撷英</Link>
            </li>
            <li>
              <Link to="/society/presidents" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">历任社长</Link>
            </li>
            <li>
              <Link to="/society/members" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">社员名录</Link>
            </li>
            <li>
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
            <span className="text-xlys-red">历任社长</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">历任社长</h2>
          <div className="space-y-4">
            {presidents.map((president, index) => (
              <div key={index} className="flex items-center gap-4 pb-4 border-b border-xlys-beige-dark last:border-0">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-1">
                    {index < 3 ? (
                      <Link to={`/society/presidents/${president.name}`} className="text-xlys-dark font-bold text-sm hover:text-xlys-red">
                        {president.name}
                      </Link>
                    ) : (
                      <h4 className="text-xlys-dark font-bold text-sm">{president.name}</h4>
                    )}
                    <span className="text-xlys-red text-xs">{president.term}</span>
                  </div>
                  <p className="text-xlys-gray text-xs">{president.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocietyPresidentsPage;