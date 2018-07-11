import React from 'react';
import pageLoader from 'images/load.gif';
import searchLoader from 'images/Spinner.gif';

export function PageLoader ( {state} ) {
  return state ?(
    <div className="loader-bg" >
      <img className="loader" src={pageLoader} alt="" />
    </div>
  ) : <div></div>
}

export function SearchLoader({ loading }) {
  return loading? <img className="search-loader" src={searchLoader} alt="" /> : <div></div>
}