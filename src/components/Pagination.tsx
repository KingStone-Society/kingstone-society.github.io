import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages: number[] = [];
  const maxVisible = 5;
  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let end = Math.min(totalPages, start + maxVisible - 1);
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="flex items-center justify-center gap-1 mt-6 pt-4 border-t border-xlys-beige-dark">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 text-sm text-xlys-dark hover:text-xlys-red disabled:text-xlys-gray disabled:cursor-not-allowed"
      >
        &laquo; 上一页
      </button>
      {start > 1 && (
        <>
          <button onClick={() => onPageChange(1)} className="w-8 h-8 text-sm text-xlys-dark hover:bg-xlys-beige rounded">1</button>
          {start > 2 && <span className="text-xlys-gray text-sm">...</span>}
        </>
      )}
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 text-sm rounded ${
            page === currentPage
              ? 'bg-xlys-red text-white'
              : 'text-xlys-dark hover:bg-xlys-beige'
          }`}
        >
          {page}
        </button>
      ))}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="text-xlys-gray text-sm">...</span>}
          <button onClick={() => onPageChange(totalPages)} className="w-8 h-8 text-sm text-xlys-dark hover:bg-xlys-beige rounded">{totalPages}</button>
        </>
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 text-sm text-xlys-dark hover:text-xlys-red disabled:text-xlys-gray disabled:cursor-not-allowed"
      >
        下一页 &raquo;
      </button>
    </div>
  );
};

export default Pagination;
