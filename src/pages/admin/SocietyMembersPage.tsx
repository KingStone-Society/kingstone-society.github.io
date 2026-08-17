import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const membersByGeneration = {
  '第1届': ['钱牧风', '刘馨阳', '廖翌辰', '徐正杰', '印奕涵'],
  '第2届': [
    '高一1班 张奕茹', '高一1班 李奕辰', '高一1班 刘芷昕', '高一1班 马婉菁',
    '高一1班 郭星雨', '高一1班 赵佳婷', '高一1班 邓语欢',
    '高一1班 李君瑜', '高一1班 杜若轩', '高一1班 袁霞妮', '高一1班 张弘毅',
    '高一1班 周米乐', '高一6班 秦子琪', '高一2班 陆思语', '高一6班 胡斯诺',
    '高一6班 卢照邻', '高二8班 许张怡', '高二9班 廖翌辰', '高二9班 仇雨萌',
    '高二9班 程乐妍', '高二6班 卢王艺', '高二6班 陈夕钰', '高二5班 徐一辰',
    '高二5班 贾永佳', '高二6班 袁思琪', '高二6班 张慕敏', '高二9班 杨辰',
    '高三3班 徐正杰'
  ],
  '第3届': [
    '高一1班 董文萱', '高一2班 卓逸菲', '高一2班 罗一满', '高一2班 庄岩',
    '高一10班 许伊凯', '高一10班 黄雅', '高一10班 金李纳', '高二1班 杜鑫',
    '高二1班 从文婧', '高二1班 陈芯蕊', '高二2班 李奕辰', '高二2班 李若辰',
    '高二2班 孙若拙', '高二3班 周米乐', '高二3班 朱梓徐', '高二3班 王芊涵',
    '高二4班 林沛媛', '高二4班 沈郁涵', '高二5班 袁霞妮', '高二5班 黄嘉滢',
    '高二6班 徐至瑜', '高二9班 朱思翰', '高二9班 徐怡薰', '高二10班 吴雨菲',
    '高二3班 张奕茹', '高一7班 秦子琪', '高一10班 纪振轩', '高一7班 张思齐',
    '高一8班 熊佳妮', '高一8班 谢锖添', '高一8班 陈志博'
  ],
  '第4届': []
};

const SocietyMembersPage: React.FC = () => {
  const [selectedGeneration, setSelectedGeneration] = useState('第1届');

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
              <Link to="/society/members" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">社员名录</Link>
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
            <span className="text-xlys-red">社员名录</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">社员名录</h2>
          <div className="relative inline-block mb-6">
            <select
              value={selectedGeneration}
              onChange={(e) => setSelectedGeneration(e.target.value)}
              className="appearance-none bg-xlys-red text-white px-6 py-2 text-sm font-bold cursor-pointer pr-10 border-none outline-none"
            >
              {Object.keys(membersByGeneration).map((generation) => (
                <option key={generation} value={generation} className="bg-white text-xlys-dark">
                  {generation}
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
            {membersByGeneration[selectedGeneration].length > 0 ? (
              <div className="columns-4 gap-4 space-y-2">
                {membersByGeneration[selectedGeneration].map((name, index) => (
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