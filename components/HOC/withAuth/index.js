import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { createAccount, logIntoAccount } from '../../../services/api/auth';
import { handleClearErrorsLog } from '../../../redux/handlers/auth';
import { handleValidation } from '../../../utils/auth';

const withAuth = Component => props => {
  const { loginAuth } = props;

  const { authCredentials, handleOnChange } = useAuth({
    username: '',
    email: '',
    password: ''
  });

  Component.displayName = `withAuth(${Component.displayName || Component.name})`;

  const submitEvent = loginAuth ? logIntoAccount : createAccount;
  const validation = handleValidation(loginAuth ? 'login' : 'signup');

  return (
    <Component
      {...props}
      {... {
        authCredentials,
        handleOnChange,
        submitEvent,
        validation,
        handleClearErrorsLog,
      }}
    />
  );
}

export default withAuth;