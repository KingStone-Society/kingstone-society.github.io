import React from 'react';

const links = [
  {
    name: '入社申请',
    href: '#'
  },
  {
    name: '社员名录',
    href: '#'
  },
  {
    name: '学术征稿',
    href: '#'
  },
  {
    name: '培训报名',
    href: '#'
  }
];

const QuickLinks: React.FC = () => {
  return (
    <div className="w-[340px] p-4">
      <ul className="grid grid-cols-2 gap-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="block bg-xlys-beige hover:bg-xlys-beige-dark text-xlys-dark text-center py-3 px-4 text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;