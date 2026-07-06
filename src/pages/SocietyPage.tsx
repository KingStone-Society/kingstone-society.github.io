import React from 'react';
import { Link } from 'react-router-dom';

const SocietyPage: React.FC = () => {
  return (
    <div className="flex gap-4">
        <div className="w-[200px] bg-white border border-xlys-beige-dark">
          <div className="p-4 border-b border-xlys-beige-dark bg-xlys-beige">
            <h3 className="text-xlys-dark font-bold">社团情况</h3>
          </div>
          <ul className="p-2">
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-red bg-xlys-beige text-sm">社团概况</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm">创社历史</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm">历任社长</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm">社员名录</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-xlys-dark hover:text-xlys-red hover:bg-xlys-beige text-sm">大事记</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-white border border-xlys-beige-dark p-4">
          <div className="flex items-center text-xs text-xlys-gray mb-6">
            <span>当前位置：</span>
            <Link to="/" className="hover:text-xlys-red">首页</Link>
            <span> &gt; </span>
            <Link to="/society" className="hover:text-xlys-red">社团情况</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">社团概况</span>
          </div>
          <div className="mb-6">
            <h2 className="text-xlys-dark font-bold text-xl mb-4 border-b border-xlys-beige-dark pb-2">社团概况</h2>
            <div className="flex gap-4 mb-4">
              <div className="w-48 h-48 img-placeholder flex-shrink-0">
                <span className="text-xs">社团照片</span>
              </div>
              <div className="flex-1">
                <p className="text-xlys-dark text-sm leading-relaxed">
                  金石篆刻社以弘扬我中华民族传统篆刻文化为目标，旨在培植我校篆刻爱好者审美、鉴赏、实践的能力。藉篆刻的学习与交流，丰富校园文化生活。我社踊跃投身学校组织参与的如校园开放日、社团文化节、区级展示、沪喀携手系列活动、庆祝建团102周年主题活动、合作办学三周年等活动；积极参加各类比赛，是我校获奖最多的艺术类社团，亦是我校"游于艺"建设中的一股生力军。
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-xlys-beige p-4 text-center">
                <div className="text-xlys-red text-2xl font-bold mb-1">50+</div>
                <div className="text-xlys-gray text-xs">在册社员</div>
              </div>
              <div className="bg-xlys-beige p-4 text-center">
                <div className="text-xlys-red text-2xl font-bold mb-1">8</div>
                <div className="text-xlys-gray text-xs">年历史</div>
              </div>
              <div className="bg-xlys-beige p-4 text-center">
                <div className="text-xlys-red text-2xl font-bold mb-1">12</div>
                <div className="text-xlys-gray text-xs">年度活动</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xlys-dark font-bold text-lg mb-4">社团宗旨</h3>
            <div className="border-l-4 border-xlys-red pl-4">
              <p className="text-xlys-dark text-sm italic">
                "弘扬中华民族传统篆刻文化，培植篆刻爱好者审美、鉴赏、实践能力"
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SocietyPage;