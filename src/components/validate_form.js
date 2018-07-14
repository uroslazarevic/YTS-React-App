const validate = values => {
  const errors = {};
  const { username, password, email, confirmPassword } = values;

  !username ? errors.username = 'Username required': null;

  !password ? errors.password = 'Password required': null;

  if (!email) {
    errors.email = 'Email required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if(confirmPassword !== password) {
    errors.confirmPassword = 'Please confirm the password' 
  } else if (!confirmPassword) {
    errors.confirmPassword = 'Password required '
  }

  return errors;
}

export default validate;