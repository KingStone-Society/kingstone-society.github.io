import React from 'react';
import { Link } from 'react-router-dom';
import { useJsonData } from '../hooks/useJsonData';

interface CooperationData {
  introduction: string;
  directions: string[];
  note: string;
  email: string;
  noteTail: string;
  contact: { person: string; phone: string };
  image: string;
}

const CooperationPage: React.FC = () => {
  const { data, loading } = useJsonData<CooperationData>('/data/cooperation.json');

  if (loading) {
    return <div className="bg-white border border-xlys-beige-dark p-4 text-xlys-gray text-sm text-center">加载中…</div>;
  }

  if (!data) {
    return <div className="bg-white border border-xlys-beige-dark p-4 text-xlys-gray text-sm text-center">数据加载失败</div>;
  }

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
            <p className="mb-4">{data.introduction}</p>
            <p className="mb-4">合作方向包括但不限于：</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              {data.directions.map((direction) => (
                <li key={direction}>{direction}</li>
              ))}
            </ul>
            <p className="mb-4">{data.note} <span className="text-xlys-red">{data.email}</span>{data.noteTail}</p>
            <div className="bg-xlys-beige p-4 mb-4">
              <p className="text-xs space-y-1">
                <span>联系人：{data.contact.person}</span><br/>
                <span>联系电话：{data.contact.phone}</span>
              </p>
            </div>
            <div className="w-full h-48 bg-xlys-beige">
              {data.image && <img src={data.image} alt="合作申请表" className="w-full h-full object-cover" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CooperationPage;