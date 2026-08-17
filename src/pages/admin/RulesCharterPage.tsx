import React from 'react';
import { Link } from 'react-router-dom';

const RulesCharterPage: React.FC = () => {
  return (
    <div className="bg-white border border-xlys-beige-dark p-4">
      <div className="flex items-center text-xs text-xlys-gray mb-6">
        <span>当前位置：</span>
        <Link to="/" className="hover:text-xlys-red">首页</Link>
        <span> &gt; </span>
        <Link to="/rules" className="hover:text-xlys-red">规章制度</Link>
        <span> &gt; </span>
        <span className="text-xlys-red">金石篆刻社章程</span>
      </div>
      <h2 className="text-xlys-dark font-bold text-xl mb-6 border-b border-xlys-beige-dark pb-2">金石篆刻社章程</h2>
      <p className="text-xlys-gray text-xs text-center mb-6">（2026年7月修订版）</p>
      <div className="text-xlys-dark text-sm leading-relaxed space-y-4">

        <section>
          <h3 className="text-xlys-red font-bold text-base mb-2 text-center">第一章 总则</h3>

          <p className="mb-2"><strong>第一条　名称</strong></p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            本社全称为"上海师范大学附属嘉定高级中学金石篆刻社"，下简称"篆刻社"。
          </p>

          <p className="mb-2"><strong>第二条　宗旨</strong></p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            篆刻社以弘扬中华民族传统篆刻文化为宗旨，旨在培植我校篆刻爱好者的审美观念、鉴赏能力及实践功夫，藉篆刻的学习与交流，丰富校园文化生活。
          </p>

          <p className="mb-2"><strong>第三条　性质</strong></p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            篆刻社为上海师范大学附属嘉定高级中学学生自愿组织之非营利性社团，受学校有关部门的指导及监督。
          </p>
        </section>

        <section>
          <h3 className="text-xlys-red font-bold text-base mb-2 text-center">第二章 组织机构</h3>

          <p className="mb-2"><strong>第四条　社员</strong></p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            凡对篆刻、书法等中华传统艺术文化怀有兴趣的上海师范大学附属嘉定高级中学在校学生，均可申请加入篆刻社。社员应遵守中华人民共和国法律及学校各项规章制度，尊重社团章程，积极参加社务活动。
          </p>

          <p className="mb-2"><strong>第五条　社务人员</strong></p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第一款　本社设三名社长，分管教学、外联、内务三项职能。教学社长主持社团课教学；外联社长代表社团联络社外人员、协调对外事务；内务社长负责社团文件管理、活动记录填报等内勤事务。三名社长中选出一名社团负责人，代表社团出席活动、制作活动相关材料。负责人职务默认由教学社长担任。
          </p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第二款　本社设"二层履职"制度：教学、外联、内务三个基础职能由三位社长分别行使，另设"负责人"一项，作为社长和副社长的区分，默认叠加于教学社长之上。撤职时可分层处理，仅撤负责人或连同基本职能一并撤除。
          </p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第三款　新一届社务人员由前负责人选定，报宓家瑜老师及其他相关老师、社团管理部审核备案。
          </p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第四款　社务人员因违纪等原因不能胜任的，可撤去其职务。因撤职引起的空缺，由宓老师和剩余社务人员商讨后，结合目标人选意志，选定新的社务人员。
          </p>

          <p className="mb-2"><strong>第六条　社长选拔制度</strong></p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第一款　社长候选人须经过副社长考察期。候选人须担任副社长（教学、外联、内务之一）满一学期，未出重大差错，方获提名资格。
          </p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第二款　候选人通过考察后，进入面试考察阶段。由前三位社长组成面试考察小组，通过线上会议进行面试考察和指点。考察完成后，如未出现严重不能胜任社长职务的情况，视为考察通过，正式确认为新任社长。
          </p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第三款　新任社长享有自由提名副社长的权利，提名名单报宓老师审核。审核通过后，副社长正式进入社团行政群，招新完成后向宓老师提名副社长完成组阁。
          </p>
        </section>

        <section>
          <h3 className="text-xlys-red font-bold text-base mb-2 text-center">第三章 社务活动</h3>

          <p className="mb-2"><strong>第七条　社务活动</strong></p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第一款　篆刻社定期组织篆刻技法教学、名家作品鉴赏等活动，提高社员的篆刻水平。
          </p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第二款　篆刻社举办篆刻作品展示活动，展示社员篆刻成果，交流篆刻心得。
          </p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第三款　篆刻社与其他社团合作，组织雅集、合作社团展示等各类活动。
          </p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第四款　篆刻社根据学校安排，参与学校举办的文化活动，展现社团风采。
          </p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第五款　篆刻社积极响应学校关于各项艺术比赛的号召，踊跃报名争创佳绩。
          </p>

          <p className="mb-2"><strong>第八条　精神传承</strong></p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第一款　所有社长即任前须制作个人简历，包含200字以上个人介绍、近照一张和手写签名一份。下任后，须续写200字简历，内容为即任社长时的工作内容及所参加活动。简历须在面试考察前一周内上传至社团行政群。
          </p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第二款　社长、社员的优秀作品，经本人同意后由社团存档，用于社团宣传、编年录制作及对外展示。
          </p>
        </section>

        <section>
          <h3 className="text-xlys-red font-bold text-base mb-2 text-center">第四章 社员权利与义务</h3>

          <p className="mb-2"><strong>第九条　社员权利</strong></p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第一款　社员有权参与社务组织之各类活动，享有同等的参与及学习机会。
          </p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第二款　社员有权对社务提出建议、批评及监督，对社团事务享有知情权。
          </p>

          <p className="mb-2"><strong>第十条　社员义务</strong></p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第一款　社员应遵守社章，维护社务之声誉与形象，积极参与社务活动。
          </p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第二款　社员应尊敬他人，团结协作，共同推动社团发展。
          </p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第三款　社员应按时完成社务所安排的任务，不无故缺席社务活动。因故请假次数一学期不得超过三次。活动开始前须签到，由内务社长负责记录。
          </p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            第四款　所有社员应自觉杜绝官僚主义、形式主义等歪风邪气，促进社团健康发展。
          </p>
        </section>

        <section>
          <h3 className="text-xlys-red font-bold text-base mb-2 text-center">第五章 附则</h3>

          <p className="mb-2"><strong>第十一条　社章修改</strong></p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            社章修改需经社务干部讨论、报宓老师审核后方可生效。修改后应及时向学校有关机关报备。
          </p>

          <p className="mb-2"><strong>第十二条　社章解释</strong></p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            本社章之解释权归金石篆刻社行政群（历任社长）所有，日常解释由现任社长负责。遇重大分歧，由宓老师裁定。
          </p>

          <p className="mb-2"><strong>第十三条　社团解散</strong></p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            社团因特殊原因需要解散时，应向学校有关机关提出申请。
          </p>

          <p className="mb-2"><strong>第十四条　社章生效</strong></p>
          <p className="mb-2" style={{ textIndent: '2em' }}>
            本章程自公布之日起生效。
          </p>
        </section>

        <p className="text-xlys-gray text-xs text-right">2026年7月修订</p>
      </div>
    </div>
  );
};

export default RulesCharterPage;
