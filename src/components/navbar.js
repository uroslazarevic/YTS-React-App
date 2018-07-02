import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../images/yts-logo.png'
import SearchBar from '../containers/search_bar';


export default function() {
  return (
    <div id="navbar">
      {/* <div className="container"> */}
        <div className="row">
          <div className="col-md-6">
            <div className="logo">
              <img src={logo} alt='logo' />
              <span>HD movies at the smallest file size</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="navbar-right" >
              <SearchBar />
              <ul className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/browse-movies'>Browse Movies</Link>
                <a href="javascript:void(0)" className="login-nav-btn">Login</a>
                <span>&#124;</span>
                <a href="javascript:void(0)" className="register-nav-btn">Register</a>
              </ul>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  ) 
}