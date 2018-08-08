import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from 'images/yts-logo.png';
import SearchBar from 'containers/search_bar';
import { LoginForm, RegisterForm } from 'components';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginForm: false,
      showRegisterForm: false,
      showForms: false
    };

    this.loginForm = React.createRef();
    this.registerForm = React.createRef();
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleFormsState = this.handleFormsState.bind(this);
    this.handleLoginForm = this.handleLoginForm.bind(this);
    this.handleRegisterForm = this.handleRegisterForm.bind(this);
  }

  handleLoginForm(event) {
    event.persist();
    const { target } = event;
    if(target.className === 'login-form-title' || target.className === 'login-nav-btn') {

      this.setState({ 
          showForms: true,
          showLoginForm: true,
          showRegisterForm: false
      }, () => {
        target.style.background='#fff' 
        this.registerForm.current.style.background='#eaeaea'
      })
    }
  }

  handleRegisterForm(event) {
    event.persist();
    const { target } = event;
    if(target.className === 'register-form-title' || target.className === 'register-nav-btn') {

      this.setState({ 
        showForms: true,
        showRegisterForm: true,
        showLoginForm: false
      }, () => {
        target.style.background='#fff' 
        this.loginForm.current.style.background='#eaeaea'
      })
    }
  }

  handleFormsState(event) {
    event.target.classList.contains('forms-bg') && this.setState({ 
      showForms: false,
      showRegisterForm: false,
      showLoginForm: false
    })

  }

  onFormSubmit() {
    this.setState({ showForms: false });
  }

  render() {

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
                  <a 
                    onClick={this.handleLoginForm}
                    href="javascript:void(0)" 
                    className="login-nav-btn">
                    Login
                  </a>
                  <span>&#124;</span>
                  <a 
                    onClick={this.handleRegisterForm}
                    href="javascript:void(0)" 
                    className="register-nav-btn">
                    Register
                  </a>
                </ul>
              </div>
            </div>
          </div>
        {/* </div> */}
        { this.state.showForms && <div 
            onClick={this.handleFormsState}
            className="forms-bg">
            <div className="forms">
              <div className="switch-forms">
                <div onClick={this.handleLoginForm} ref={this.loginForm}className="login-form-title">Login</div>
                <div onClick={this.handleRegisterForm} ref={this.registerForm} className="register-form-title">Register</div>
              </div>
              { this.state.showLoginForm && <LoginForm onFormSubmit={this.onFormSubmit} /> }
              { this.state.showRegisterForm && <RegisterForm onFormSubmit={this.onFormSubmit} /> }
            </div>
          </div>}
      </div>
    ) 
  }
}