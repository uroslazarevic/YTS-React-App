import React from 'react';
import ReactPaginate from 'react-paginate';

export default function ({ 
  pageCount, 
  handlePageClick,
  forcePage }) {
  return (
    <ReactPaginate
      previousLabel={"<<Previous"}
      nextLabel={"Next>>"}
      breakLabel={<a href="">...</a>}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
      forcePage={forcePage} />
  );
}