import React from 'react';
import { Link } from 'react-router-dom';

const SocietyPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-[200px]">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <h3 className="text-xlys-dark font-bold text-lg mb-4">社团情况</h3>
          <ul className="flex flex-wrap gap-2 lg:block lg:space-y-2">
            <li className="flex-1 lg:flex-none">
              <Link to="/society" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">社团概况</Link>
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
            <span className="text-xlys-red">社团概况</span>
          </div>
          <div className="mb-6">
            <h2 className="text-xlys-dark font-bold text-xl mb-4 border-b border-xlys-beige-dark pb-2">社团概况</h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="w-full sm:w-48 h-48 flex-shrink-0 bg-xlys-beige">
                <img src="/images/static/society-photo.png" alt="社团照片" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="text-xlys-dark text-sm leading-relaxed">
                  金石篆刻社以弘扬我中华民族传统篆刻文化为目标，旨在培植我校篆刻爱好者审美、鉴赏、实践的能力。藉篆刻的学习与交流，丰富校园文化生活。我社踊跃投身学校组织参与的如校园开放日、社团文化节、区级展示、沪喀携手系列活动、庆祝建团102周年主题活动、合作办学三周年等活动；积极参加各类比赛，是我校获奖最多的艺术类社团，亦是我校"游于艺"建设中的一股生力军。
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-xlys-beige p-4 text-center">
                <div className="text-xlys-red text-2xl font-bold mb-1">72</div>
                <div className="text-xlys-gray text-xs">在册社员</div>
              </div>
              <div className="bg-xlys-beige p-4 text-center">
                <div className="text-xlys-red text-2xl font-bold mb-1">4</div>
                <div className="text-xlys-gray text-xs">年历史</div>
              </div>
              <div className="bg-xlys-beige p-4 text-center">
                <div className="text-xlys-red text-2xl font-bold mb-1">15</div>
                <div className="text-xlys-gray text-xs">年度活动</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xlys-dark font-bold text-lg mb-4">社团理念</h3>
            <div className="border-l-4 border-xlys-red pl-4">
              <p className="text-xlys-dark text-sm italic">
                "澄源正本，式启惟新；执此方寸，叩问千里。为文化之明日而奋斗"
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xlys-dark font-bold text-lg mb-4 text-center">金石篆刻社小序</h3>
            <p className="text-xlys-gray text-sm text-center mb-2">钱牧风</p>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 text-center">
                <p className="text-xlys-dark text-sm leading-loose">披览寻古韵，翰墨有余芳。</p>
                <p className="text-xlys-dark text-sm leading-loose">寒光一出鞘，盘复奏文章。</p>
                <p className="text-xlys-dark text-sm leading-loose">泱泱文化非遗宝，源远篆刻永流长。</p>
                <p className="text-xlys-dark text-sm leading-loose">可惜自打机器出，日渐凋零篆刻刀。</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-xlys-dark text-sm leading-loose">重整旗鼓再登堂，时下何分宗与旁。</p>
                <p className="text-xlys-dark text-sm leading-loose">球琳琅玕今日考，勿留遗恨复感伤。</p>
                <p className="text-xlys-dark text-sm leading-loose">方寸气象共翱翔，争作后浪盛前浪。</p>
                <p className="text-xlys-dark text-sm leading-loose">殚见洽闻非一时，金石听我再铿锵。</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-xlys-dark text-sm leading-loose">研习秦汉风，捉笔更创造。</p>
                <p className="text-xlys-dark text-sm leading-loose">聚焦新世纪，抽刀再发扬。</p>
                <p className="text-xlys-dark text-sm leading-loose">神领意造非易事，青年应当出力量。</p>
              </div>
            </div>
            <p className="text-xlys-gray text-xs text-center mt-4">2025年7月4日</p>
          </div>
          <div className="mt-8">
            <h3 className="text-xlys-dark font-bold text-lg mb-4">社徽演变</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-xlys-beige">
                  <img src="/images/static/emblem1.jpg" alt="第一代社徽" className="w-full h-full object-contain" />
                </div>
                <p className="text-xlys-gray text-xs mt-2">第一代社徽</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-xlys-beige">
                  <img src="/images/static/emblem2.png" alt="第二代社徽" className="w-full h-full object-contain" />
                </div>
                <p className="text-xlys-gray text-xs mt-2">第二代社徽</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-xlys-beige">
                  <img src="/images/static/emblem3.png" alt="第三代社徽" className="w-full h-full object-contain" />
                </div>
                <p className="text-xlys-gray text-xs mt-2">第三代社徽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocietyPage;