import React from 'react';
import { useParams, Link } from 'react-router-dom';

const presidentData: Record<string, {
  name: string;
  term: string;
  photo: string;
  introduction: string | string[];
  achievements: string[];
}> = {
  '钱牧风': {
    name: '钱牧风',
    term: '2023.8~2024.9',
    photo: '/images/static/qmf.jpg',
    introduction: [
      '钱牧风，笔名星川，师承张纪秦老师。工于诗词、文章、篆刻，尤擅白文入印，近期在系统研究古玺章法。2023年创建金石篆刻社团，并在较短时间带领社团发展壮大，乃至成为一个巅峰时期。逊位后，钱牧风也在持续不断为社团持续产出作品。',
      '但钱牧风成立第一届社团时并没有对社员进行筛选，直接导致社员篆刻素养偏低，尽管钱牧风本人可以胜任领导，此举也给后续的社团发展带来了挑战。',
    ],
    achievements: [
      '2023年10月定稿篆刻社章程和考评标准，使社团成为最早拥有章程的社团',
      '2023年12月率社团参加上师嘉高特色普通高中创建区域展示活动的社团展示活动',
      '2024年4月带领社团参加学校首届社团文化节',
      '2024年5月代表社团联合墨拓社赴交附嘉分参加嘉定区教育系统庆祝建团102周年主题活动的社团展示活动',
      '2024年6月代表社团参加学校与上师大合作三周年展示活动，并在会上发言',
      '2024年6月率社团参加校园开放日的社团展示',
      '2024年9月率领社团参加学校首届社团评选活动并获诸票数第一。社团获明星社团，个人获明星社长',
      '2025年6月，在逊位一年后再度出山，率第二届社团赴保利大剧院参加嘉定区美育浸润成果展的社团展示。这是钱牧风最后一次率团外出，也是社团最高层次的外出',
      '逊位后，先后产出通用讲义、社务手册、社团2025年度宣传片、社务理论系统等作品'
    ]
  },
  '刘馨阳': {
    name: '刘馨阳',
    term: '2024.9~2025.9',
    photo: '/images/static/lxy.jpg',
    introduction: '刘馨阳，金石篆刻社第二任社长。于首任社长逊位后接管社团，时值初创团队离校、钱牧风时期的社长负责制实施起来难度较高，新的制度体系尚未定型之际。任内首创新生群精准招新策略，发现并任命张奕茹为副社长，为社团中兴作出了基础性贡献。凭借通用讲义，忠实且出色地执行已有社团课制度，维持社团正常运转，为社团作出重要贡献。加强社团与学校的联系，带领社团多次参加活动。善于组织协调，以其责任心支撑社团度过过渡期，使初创阶段的成果得以保留。',
    achievements: [
      '2024年9月参与社团海报和新LOGO的设计',
      '2024年12月率社团参加学校市级展示的社团展示',
      '2024年12月参与学校社团宣传片的脚本编写与拍摄',
      '2025年5月率社团参加校园开放日社团展示',
      '2025年6月率社团参加校园开放日的社团展示',
      '2025年6月带领第二期社团和首任社长钱牧风，时任副社长的第三任社长张奕茹参加嘉定区美育浸润成果展的社团展示'
    ]
  },
  '张奕茹': {
    name: '张奕茹',
    term: '2025.9~2026.9',
    photo: '/images/static/zyr.jpg',
    introduction: '张奕茹，金石篆刻社第三任社长，篆刻六级，是继首任社长之后首位兼具篆刻技艺与社务热情的继任者。任内大力推进社团专业化建设，同时兼顾自我篆刻素养提升，受到来自宓老师等领导的广泛认可。',
    achievements: [
      '2024年12月参与学校社团宣传片的脚本编写与拍摄',
      '2025年5月参与社团参加校园开放日社团展示',
      '2025年6月随首任社长钱牧风和第二任社长刘馨阳参加嘉定区美育浸润成果展的社团展示',
      '2025年8月代表社团参加西部地区师生来访活动',
      '2026年6月率社团参加学校第三届社团文化节的社团展示'
    ]
  }
};

const PresidentDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const president = presidentData[name || ''];

  if (!president) {
    return (
      <div className="bg-white border border-xlys-beige-dark p-4">
        <p className="text-xlys-gray">社长信息不存在</p>
        <Link to="/society/presidents" className="text-xlys-red hover:underline">返回历任社长</Link>
      </div>
    );
  }

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
              <Link to="/society/presidents" className="block bg-xlys-red text-white px-3 py-2 text-sm text-center">历任社长</Link>
            </li>
            <li>
              <Link to="/society/members" className="block hover:bg-xlys-beige text-xlys-dark px-3 py-2 text-sm text-center">社员名录</Link>
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
            <Link to="/society/presidents" className="hover:text-xlys-red">历任社长</Link>
            <span> &gt; </span>
            <span className="text-xlys-red">{president.name}</span>
          </div>
          <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">{president.name}</h2>
          <div className="flex gap-6">
            <div className="w-36 h-48 flex-shrink-0 bg-xlys-beige">
              {president.photo ? (
                <img src={president.photo} alt={president.name} className="w-full h-full object-contain" />
              ) : (
                <div className="w-full h-full img-placeholder flex items-center justify-center">
                  <span className="text-xs">{president.name}</span>
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <span className="text-xlys-red text-sm font-bold">{president.term}</span>
              </div>
              <div className="mb-6">
                <h4 className="text-xlys-dark font-bold text-sm mb-2">个人简介</h4>
                <div className="space-y-2">
                  {Array.isArray(president.introduction) ? (
                    president.introduction.map((para, idx) => (
                      <p key={idx} className="text-xlys-gray text-sm leading-relaxed text-indent-8">
                        {para}
                      </p>
                    ))
                  ) : (
                    <p className="text-xlys-gray text-sm leading-relaxed text-indent-8">
                      {president.introduction}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <h4 className="text-xlys-dark font-bold text-sm mb-2">主要成就</h4>
                <ul className="space-y-2">
                  {president.achievements.map((achievement, index) => (
                    <li key={index} className="text-xlys-gray text-sm flex items-start">
                      <span className="text-xlys-red mr-2">●</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentDetailPage;
