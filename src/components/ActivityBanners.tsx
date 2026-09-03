import React from 'react';
import { Link } from 'react-router-dom';

const CN_DIGITS = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

function toChineseNumber(n: number): string {
  if (n < 10) return CN_DIGITS[n];
  if (n === 10) return '十';
  if (n < 20) return '十' + (n % 10 ? CN_DIGITS[n % 10] : '');
  if (n < 100) {
    const tens = Math.floor(n / 10);
    const ones = n % 10;
    return CN_DIGITS[tens] + '十' + (ones ? CN_DIGITS[ones] : '');
  }
  return String(n);
}

/** 已满周年数：以北京时间 2023-08-29 12:00（即 UTC 04:00）成立起算，满 1 年为 1 周年 */
function calcAnniversary(): number {
  // 把“当前北京钟面”用 UTC 毫秒表示，便于与周年边界比较
  const nowBj = Date.now() + 8 * 60 * 60 * 1000;
  let years = 0;
  // 第 N 个周年边界：2023+N 年 8 月 29 日北京时间 12:00 = UTC 当日 04:00
  while (Date.UTC(2023 + years + 1, 7, 29, 4, 0, 0) <= nowBj) {
    years++;
  }
  return years;
}

const ActivityBanners: React.FC = () => {
  const anniversary = calcAnniversary();
  const banners = [
    {
      title: '春季雅集',
      searchQuery: '春日雅集'
    },
    {
      title: `金石篆刻社${toChineseNumber(anniversary)}周年社庆系列活动`,
      searchQuery: '社庆'
    },
    {
      title: '秋季雅集',
      searchQuery: '秋季雅集'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-[22px] mt-4">
      {banners.map((banner, index) => (
        <Link
          key={index}
          to={`/search?q=${encodeURIComponent(banner.searchQuery)}`}
          className="flex items-center justify-center h-12 sm:h-14 bg-gradient-to-r from-xlys-red to-xlys-red-dark text-white font-bold text-sm text-center px-3 hover:opacity-90 transition-opacity edge-activity-banner"
        >
          <span className="block w-full truncate">{banner.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default ActivityBanners;
