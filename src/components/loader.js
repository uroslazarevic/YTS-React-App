import React from 'react';
import pageLoader from 'images/load.gif';
import searchLoader from 'images/Spinner.gif';

export function PageLoader () {
  return (
    <div className="loader-bg" >
      <img className="loader" src={pageLoader} alt="" />
    </div>
  );
}

export function SearchLoader() {
  return <img className="search-loader" src={searchLoader} alt="" />
}