import React, { useState } from 'react';

const Pagination = ({ postsPerPageOptions, defaultPostsPerPage, length }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(defaultPostsPerPage);

  const totalPages = Math.ceil(length / postsPerPage);
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5; // Change this value to adjust the maximum number of visible page buttons
    const ellipsis = <span key="ellipsis">...</span>;

    // Calculate start and end page numbers to display based on the current page
    let startPage = currentPage - Math.floor(maxPageButtons / 2);
    startPage = Math.max(startPage, 1);
    let endPage = startPage + maxPageButtons - 1;
    endPage = Math.min(endPage, totalPages);

    if (startPage > 1) {
      pageNumbers.push(
        <button key={1} onClick={() => handleClick(1)}>
          1
        </button>
      );
      if (startPage > 2) {
        pageNumbers.push(ellipsis);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(ellipsis);
      }
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handleClick(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };


  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePostsPerPageChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPostsPerPage(value);
    setCurrentPage(1); // Reset to first page when changing posts per page
  };

  return (
    <div className='pagination'>
      <div className='pagination-wrp'>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        {renderPageNumbers()}
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <div className='page-options'>
        <button className='entries-per-page'>
          Entries per page:
          <select value={postsPerPage} onChange={handlePostsPerPageChange}>
            {postsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
