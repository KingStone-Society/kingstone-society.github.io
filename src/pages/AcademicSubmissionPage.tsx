import React from 'react';
import { Link } from 'react-router-dom';

const AcademicSubmissionPage: React.FC = () => {
  return (
    <div className="flex gap-4">
      <div className="w-[200px]">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <h3 className="text-xlys-dark font-bold text-lg mb-4">社务研讨</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/academic" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">研讨文集</Link>
            </li>
            <li>
              <Link to="/academic/submission" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">社务征稿</Link>
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
            <Link to="/academic" className="hover:text-xlys-red">社务研讨</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">社务征稿</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">社务征稿</h2>
          <div className="space-y-4">
            <div className="bg-xlys-beige p-4">
              <h4 className="text-xlys-dark font-bold text-sm mb-2">征稿范围</h4>
              <p className="text-xlys-gray text-xs leading-relaxed">
                欢迎社员及篆刻爱好者投稿，内容包括：社团管理经验、篆刻艺术研究、活动心得体会、文化传承思考等。
              </p>
            </div>
            <div className="bg-xlys-beige p-4">
              <h4 className="text-xlys-dark font-bold text-sm mb-2">投稿要求</h4>
              <ul className="text-xlys-gray text-xs space-y-1">
                <li>1. 文章字数一般在1000-3000字之间</li>
                <li>2. 请使用Markdown格式撰写，格式请参考标准格式模板</li>
                <li>3. 文章请注明作者姓名、年级</li>
                <li>4. 可附相关图片（放入public/images/articles目录）</li>
              </ul>
              <div className="mt-3">
                <a href="/articles/标准格式.md" download className="inline-block bg-xlys-red text-white text-xs px-4 py-2 hover:bg-xlys-red/80 transition-colors">
                  下载标准格式模板
                </a>
              </div>
            </div>
            <div className="bg-xlys-beige p-4">
              <h4 className="text-xlys-dark font-bold text-sm mb-2">投稿方式</h4>
              <p className="text-xlys-gray text-xs leading-relaxed">
                将文章以附件形式发送至邮箱：xingchuan1123@163.com，正文附班级姓名、当前社团届数。或直接联系社长提交。
              </p>
            </div>
            <div className="bg-xlys-beige p-4">
              <h4 className="text-xlys-dark font-bold text-sm mb-2">联系人</h4>
              <p className="text-xlys-gray text-xs">社长：许伊凯 | 副社长：---</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicSubmissionPage;