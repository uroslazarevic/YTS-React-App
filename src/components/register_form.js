import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from 'components';
import validate from 'components/validate_form';

class RegisterForm extends Component {

  render() {
    const {handleSubmit, onFormSubmit} = this.props;

    return (
      <form 
        className="register-form"
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
          name="email"
          type="text"
          component={renderField}
          label="E-Mail"
          icon={<i className="fas fa-envelope"></i>}
        />
        <Field
          name="password"
          type="text"
          component={renderField}
          label="Password"
          icon={<i className="fas fa-lock"></i>}
        />
        <Field
          name="confirmPassword"
          type="text"
          component={renderField}
          label="Confirm Password"
          icon={<i className="fas fa-lock"></i>}
        />
        <div>
          <button type="submit" className="register">
            Register
          </button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'registerForm', 
  destroyOnUnmount: false,
  validate
})(RegisterForm)