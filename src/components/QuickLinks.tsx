import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    name: '合作申请',
    href: '/cooperation'
  },
  {
    name: '社员名录',
    href: '/society/members'
  },
  {
    name: '社务征稿',
    href: '/academic/submission'
  },
  {
    name: '社刊投稿',
    href: '/journal/submission'
  }
];

const QuickLinks: React.FC = () => {
  return (
    <div className="w-[340px] p-4">
      <ul className="grid grid-cols-2 gap-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className="block bg-xlys-beige hover:bg-xlys-beige-dark text-xlys-dark text-center py-3 px-4 text-sm font-medium transition-colors border border-black"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;