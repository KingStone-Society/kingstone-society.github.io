import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useJsonData } from '../../hooks/useJsonData';

interface YearEvents {
  year: string;
  events: string[];
}

const TimelineYearPage: React.FC = () => {
  const { year } = useParams<{ year: string }>();
  const { data, loading } = useJsonData<{ years: YearEvents[] }>('/data/timeline.json');
  const yearData = data?.years.find((y) => y.year === year);
  const events = yearData?.events || [];

  if (loading) {
    return <div className="bg-white border border-xlys-beige-dark p-4 text-xlys-gray text-sm text-center">加载中…</div>;
  }

  if (!year || !yearData) {
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
                <Link to="/society/members" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">社员名录</Link>
              </li>
              <li className="flex-1 lg:flex-none">
                <Link to="/society/timeline" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">大事记</Link>
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
              <Link to="/society/timeline" className="hover:text-xlys-red">大事记</Link>
              <span> &gt; </span>
              <span className="text-xlys-red">{year}年</span>
            </div>
            <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">{year}年大事记</h2>
            <div className="space-y-3">
              {events.map((event, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-xlys-red flex-shrink-0">●</span>
                  <span className="text-xlys-dark text-sm">{event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
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
              <Link to="/society/presidents" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">历任社长</Link>
            </li>
            <li className="flex-1 lg:flex-none">
              <Link to="/society/members" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">社员名录</Link>
            </li>
            <li className="flex-1 lg:flex-none">
              <Link to="/society/timeline" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">大事记</Link>
            </li>
          </ul>
          <div className="mt-4 pt-4 border-t border-xlys-beige-dark">
            <h4 className="text-xlys-dark font-bold text-sm mb-2">年度索引</h4>
            <ul className="flex flex-wrap gap-2 lg:block lg:space-y-2">
              {(data?.years || []).map(({ year: y }) => (
                <li key={y} className="flex-1 lg:flex-none">
                  <Link to={`/society/timeline/${y}`} className={`block px-3 py-1 text-xs text-center ${year === y ? 'bg-xlys-red text-white' : 'hover:bg-xlys-beige text-xlys-dark'}`}>
                    {y}年
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
            <Link to="/society/timeline" className="hover:text-xlys-red">大事记</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">{year}年</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">{year}年大事记</h2>
          <div className="space-y-3">
            {events.map((event, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-xlys-red flex-shrink-0">●</span>
                <span className="text-xlys-dark text-sm">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineYearPage;
