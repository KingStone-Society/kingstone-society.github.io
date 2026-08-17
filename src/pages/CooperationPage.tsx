import React from 'react';
import { Link } from 'react-router-dom';

const CooperationPage: React.FC = () => {
  return (
    <div className="flex gap-4">
      <div className="w-[200px]">
        <div className="bg-white border border-xlys-beige-dark p-4">
          <h3 className="text-xlys-dark font-bold text-lg mb-4">合作申请</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/cooperation" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">合作申请</Link>
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
            <span className="text-xlys-red">合作申请</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">合作申请</h2>
          <div className="text-xlys-dark text-sm leading-relaxed">
            <p className="mb-4">金石篆刻社欢迎与校内外各单位、社团开展合作交流。我们致力于弘扬传统篆刻文化，愿与各界携手共进。</p>
            <p className="mb-4">合作方向包括但不限于：</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>联合举办篆刻艺术展览</li>
              <li>开展篆刻文化交流活动</li>
              <li>合作开发篆刻课程</li>
              <li>共建实践基地</li>
              <li>其他形式的文化合作</li>
            </ul>
            <p className="mb-4">校内合作请线下面询宓家瑜老师。校外有意合作者，请发送邮件至 <span className="text-xlys-red">xingchuan1123@163.com</span>，或通过以下方式联系：</p>
            <div className="bg-xlys-beige p-4 mb-4">
              <p className="text-xs space-y-1">
                <span>联系人：钱先生</span><br/>
                <span>联系电话：133-1000-1123</span>
              </p>
            </div>
            <div className="w-full h-48 bg-xlys-beige">
              <img src="/images/static/cooperation.png" alt="合作申请表" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CooperationPage;