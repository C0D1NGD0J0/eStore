import React from 'react';

const Pagination = ({ pagination, current_page, handlePageClick}) => {
  const pages = []

  for(let i=1; i<=pagination.total_pages; i++){
    pages.push(
    <li className={`${i === current_page? 'active': ''} page`} onClick={()=> handlePageClick(i)}>
      <span className="page">{i}</span>
    </li>);
  };

  return (
    <div aria-label="Page navigation" className="pagination-nav">
      <ul className="pagination-nav__list">
        {
          current_page > 1 ? 
          <li className="prev" onClick={() => handlePageClick(null, 'previous')}>
            <span class="previous">
              <span aria-hidden="true">&laquo;</span>
            </span>
          </li>
          : ''
        }

        {pages}

        {
          (current_page < pagination.current_page || current_page === pagination.current_page && pagination.hasMoreResource) ? 
          <li className="next" onClick={() => handlePageClick(null, 'next')}>
            <span class="next">
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li> : ''
        }
      </ul>
    </div>
  );
}

export default Pagination;