import React from 'react';
import { Link } from 'react-router-dom';

const yearEvents: Record<string, string[]> = {
  '2023': [
    '9月 金石篆刻社成立，钱牧风担任首任社长',
    '10月 定稿篆刻社章程和考评标准，从此社团成为最早拥有章程的社团',
    '12月 社团参加上师嘉高特色普通高中创建区域展示活动的社团展示活动',
  ],
  '2024': [
    '4月 社团参加学校首届社团文化节',
    '5月 社团联合墨拓社赴交附嘉分参加嘉定区教育系统庆祝建团102周年主题活动的社团展示活动',
    '6月 时任社长钱牧风代表社团参加学校与上师大合作三周年展示活动，并在会上发言',
    '6月 社团参加校园开放日的社团展示',
    '9月 社团参加学校首届社团评选活动并获诸票数第一，社团获明星社团，时任社长获明星社长',
    '9月 刘馨阳接任社长，主持社团海报和新LOGO的设计',
    '12月 社团参加学校市级展示的社团展示',
    '12月 社团参与学校社团宣传片的脚本编写与拍摄',
  ],
  '2025': [
    '5月 社团参加校园开放日社团展示',
    '6月 社团参加校园开放日的社团展示',
    '6月 社团联合墨拓社、书法社参加嘉定区美育浸润成果展的社团展示',
    '9月 张奕茹接任社长',
  ],
  '2026': [
    '待补充',
  ],
};

const SocietyTimelinePage: React.FC = () => {
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
              <Link to="/society/presidents" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">历任社长</Link>
            </li>
            <li>
              <Link to="/society/members" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">社员名录</Link>
            </li>
            <li>
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
            <span className="text-xlys-red">大事记</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">大事记</h2>
          <div className="space-y-6">
            {Object.entries(yearEvents).map(([year, events]) => (
              <div key={year} className="border-b border-xlys-beige-dark pb-6 last:border-0">
                <h3 className="text-xlys-red font-bold text-lg mb-4">
                  <Link to={`/society/timeline/${year}`} className="hover:underline">{year}年</Link>
                </h3>
                <div className="space-y-2">
                  {events.map((event, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-xlys-dark flex-shrink-0">●</span>
                      <span className="text-xlys-dark text-sm">{event}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocietyTimelinePage;