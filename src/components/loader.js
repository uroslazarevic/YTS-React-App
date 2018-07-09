import React from 'react';
import loader from 'images/lg.vortex-spiral-spinner.gif';

export default function (props) {
  const state = props.state;
  
  return state ?(
      <div className="loader-bg" >
        <img className="loader" src={loader} alt="" />
        <div className="circle-of-light"></div>
      </div>
  ) : <div></div>
  
}