import React, { useState } from 'react';

const Header: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchText)}`;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-white py-2 px-0">
      <div className="w-full max-w-[1140px] mx-auto px-3 sm:px-0 flex justify-end items-center gap-3 sm:gap-0 flex-wrap">
        <div className="flex items-center space-x-2">
          <a href="/admin/" className="text-xlys-dark hover:text-xlys-red text-sm">登录</a>
          <span className="text-xlys-gray">|</span>
          <a href="#" className="text-xlys-dark hover:text-xlys-red text-sm">注册</a>
        </div>
        <div className="ml-auto flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="请输入关键字"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-80 max-w-full sm:w-64 h-16 sm:h-8 px-4 sm:px-3 border border-xlys-light-gray rounded-sm text-sm outline-none focus:border-xlys-red"
              maxLength={20}
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 h-16 w-16 sm:h-8 sm:w-8 bg-xlys-red hover:bg-xlys-red-dark flex items-center justify-center cursor-pointer"
            >
              <svg className="w-8 h-8 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;