import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from 'components/validate_form';
import renderField from 'components/renderField';


const RegisterForm = props => {
  const {handleSubmit, onFormSubmit} = props;
  return (
    <form 
      className="register-form"
      onSubmit={handleSubmit(onFormSubmit)}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        fieldType='input'
      />
      <Field
        name="email"
        type="text"
        component={renderField}
        label="E-Mail"
        fieldType='input'
      />
      <Field
        name="password"
        type="text"
        component={renderField}
        label="Password"
        fieldType='input'
      />
      <Field
        name="confirmPassword"
        type="text"
        component={renderField}
        label="Confirm Password"
        fieldType='input'
      />
      <div>
        <button type="submit" className="register">
          Register
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'registerForm', 
  validate,
  destroyOnUnmount: false
})(RegisterForm)