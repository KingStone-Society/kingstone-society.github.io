import React from 'react';
import { Link } from 'react-router-dom';

const SocietyHistoryPage: React.FC = () => {
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
              <Link to="/society/history" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">师林撷英</Link>
            </li>
            <li className="flex-1 lg:flex-none">
              <Link to="/society/presidents" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">历任社长</Link>
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
            <span className="text-xlys-red">师林撷英</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">师林撷英</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-36 h-48 bg-xlys-beige mb-4">
                <img src="/images/static/zjq.jpg" alt="张纪秦老师" className="w-full h-full object-contain" />
              </div>
              <div className="text-center">
                <h4 className="text-xlys-dark font-bold text-lg mb-2">张纪秦</h4>
                <p className="text-xlys-gray text-sm leading-relaxed">
                  张纪秦，中国翰林书画院江苏省分院顾问兼海南省分院副院长、初代社长钱牧风的启蒙老师。张老师虽未直接领导社团，但向来心系社团情况，为社团三期提供平价优质篆刻刀具。
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-36 h-48 bg-xlys-beige mb-4">
                <img src="/images/static/mjy.jpg" alt="宓家瑜老师" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h4 className="text-xlys-dark font-bold text-lg mb-2">宓家瑜</h4>
                <p className="text-xlys-gray text-sm leading-relaxed">
                  宓家瑜，社团指导老师，上海师范大学美术专业书法方向研究生毕业。宓老师时时体察社团发展，一如既往无私地提供社务工作、学习生活和心理成长等方面的帮助与建议，培养出一代又一代优秀社务干部。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocietyHistoryPage;
