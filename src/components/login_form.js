import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from 'components';
import validate from 'components/validate_form';

class LoginForm extends Component {
  
  render() {
    const {handleSubmit, onFormSubmit} = this.props;
    console.log(this.props)
    return (
      <form 
        className="login-form"
        onSubmit={handleSubmit(() => {
          this.props.reset()
          onFormSubmit()
        })}>
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
          icon={<i className="fas fa-user"></i>}
        />
        <Field
          name="password"
          type="text"
          component={renderField}
          label="Password"
          icon={<i className="fas fa-lock"></i>}
        />
        <div>
          <button type="submit" className="login">
            Login
          </button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'loginForm', 
  destroyOnUnmount: false,
  validate
})(LoginForm)