import React from 'react';
import { Link } from 'react-router-dom';

const JournalSubmissionPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-[200px]">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <h3 className="text-xlys-dark font-bold text-lg mb-4">金石艺丛</h3>
          <ul className="flex flex-wrap gap-2 lg:block lg:space-y-2">
            <li className="flex-1 lg:flex-none">
              <Link to="/journal" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">在线社刊</Link>
            </li>
            <li className="flex-1 lg:flex-none">
              <Link to="/journal/submission" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">社刊投稿</Link>
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
            <Link to="/journal" className="hover:text-xlys-red">金石艺丛</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">社刊投稿</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">社刊投稿</h2>
          <div className="space-y-4">
            <div className="bg-xlys-beige p-4">
              <h4 className="text-xlys-dark font-bold text-sm mb-2">《金石艺丛》简介</h4>
              <p className="text-xlys-gray text-xs leading-relaxed">
                《金石艺丛》是金石篆刻社的官方社刊，尚在实验阶段。计划收录社员优秀作品、篆刻研究心得、活动报道等内容，出版时间不定。
              </p>
            </div>
            <div className="bg-xlys-beige p-4">
              <h4 className="text-xlys-dark font-bold text-sm mb-2">投稿范围</h4>
              <ul className="text-xlys-gray text-xs space-y-1">
                <li>1. 篆刻作品赏析与评论</li>
                <li>2. 印学理论研究</li>
                <li>3. 名家印作解读</li>
                <li>4. 社团活动纪实</li>
                <li>5. 社员优秀篆刻作品展示</li>
              </ul>
            </div>
            <div className="bg-xlys-beige p-4">
              <h4 className="text-xlys-dark font-bold text-sm mb-2">投稿要求</h4>
              <ul className="text-xlys-gray text-xs space-y-1">
                <li>1. 文章字数一般在800-2000字之间</li>
                <li>2. 作品图片请提供高清扫描件</li>
                <li>3. 请注明作者姓名、年级及联系方式</li>
              </ul>
            </div>
            <div className="bg-xlys-beige p-4">
              <h4 className="text-xlys-dark font-bold text-sm mb-2">投稿邮箱</h4>
              <p className="text-xlys-gray text-xs">xingchuan1123@163.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalSubmissionPage;