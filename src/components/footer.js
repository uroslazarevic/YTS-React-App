import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <div className="footer">
      <ul>
        <li>YTS &copy; 2011 - 2018</li>
        <span>-</span>
        <li><Link to='/blog'>Blog</Link></li>
        <span>-</span>
        <li><Link to='/dmca'>DMCA</Link></li>
        <span>-</span>
        <li><Link to='/api'>API</Link></li>
        <span>-</span>
        <li><Link to='/rss-guide'>RSS</Link></li>
        <span>-</span>
        <li><Link to='/contact'>Contact</Link></li>
        <span>-</span>
        <li><Link to='/browse-movies'>Browse Movies</Link></li>
        <span>-</span>
        <li><Link to='/requests'>Request</Link></li>
        <span>-</span>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </div>
  );
};