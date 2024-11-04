import React from 'react';
import './pagination.css'

interface PaginationProps {
  page: number;
  isPlaceholderData: boolean;
  hasNextPage: boolean;
  onPageChange: (newPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  isPlaceholderData,
  hasNextPage,
  onPageChange,
}) => {
  return (
    <div className='pagination'>
      <button
        type='button'
        onClick={() => onPageChange(Math.max(page - 1, 1))}
        disabled={page === 1}
        className='pagination__button'
      >
        Previous Page
      </button>
      <span>Page: {page}</span>
      <button
        type='button'
        onClick={() => {
          if (!isPlaceholderData && hasNextPage) {
            onPageChange(page + 1);
          }
        }}
        disabled={isPlaceholderData || !hasNextPage}
        className='pagination__button'
      >
        Next Page
      </button>
    </div>
  );
};