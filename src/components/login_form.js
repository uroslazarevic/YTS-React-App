import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from 'components/validate_form';
import renderField from 'components/renderField';
const LoginForm = props => {
  const {handleSubmit, onFormSubmit} = props;
  return (
    <form 
      className="login-form"
      onSubmit={handleSubmit(onFormSubmit)}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        fieldType='input'
      />
      <Field
        name="password"
        type="text"
        component={renderField}
        label="Password"
        fieldType='input'
      />
      <div>
        <button type="submit" className="login">
          Login
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'loginForm', 
  validate,
  destroyOnUnmount: false,
})(LoginForm)