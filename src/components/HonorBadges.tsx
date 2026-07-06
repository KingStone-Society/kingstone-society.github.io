import React from 'react';

const badges = [
  { name: '世界遗产', href: '#' },
  { name: '文化遗产', href: '#' },
  { name: '重点单位', href: '#' },
  { name: '保护单位', href: '#' },
  { name: '非遗保护', href: '#' },
  { name: '全国重点', href: '#' }
];

const HonorBadges: React.FC = () => {
  return (
    <div className="p-4 mt-4">
      <ul className="flex items-center justify-center space-x-2">
        {badges.map((badge, index) => (
          <React.Fragment key={index}>
            <li>
              <a href={badge.href} className="flex flex-col items-center">
                <div className="w-16 h-16 img-placeholder mb-1">
                  <span className="text-xs">徽章{index + 1}</span>
                </div>
              </a>
            </li>
            {index < badges.length - 1 && (
              <li className="w-px h-10 bg-xlys-light-gray mx-2" />
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default HonorBadges;