import React, { useState, useEffect } from 'react';

const bannerItems = [
  {
    title: '"印信廉"金石书画廉洁文化主题巡展走进杭州纪检监察培训中心',
    image: 'https://www.xlys.org.cn/u/cms/www/202606/1609302951uu.jpg'
  },
  {
    title: '招生｜"造像龙门"——西泠印社曹祐福造像印研创班',
    image: 'https://www.xlys.org.cn/u/cms/www/202606/2516395605s6.png'
  },
  {
    title: '《西泠艺丛》入选"第二届中国期刊封面设计精品展"',
    image: 'https://www.xlys.org.cn/u/cms/www/202606/25170242t918.png'
  },
  {
    title: '印说中国故事第二季"印证千秋·河系大运"——大运河主题篆刻艺术巡回邀请展',
    image: 'https://www.xlys.org.cn/u/cms/www/202606/25171952mlqn.png'
  }
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[700px] h-[350px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerItems.map((item, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <div className="w-full h-full img-placeholder">
              <span className="text-xlys-gray text-sm">轮播图 {index + 1}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <span className="text-white text-sm line-clamp-1">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;