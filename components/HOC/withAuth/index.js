import React from 'react';
import useAuth from '../../../hooks/custom/useAuth';
import {
  createAccount,
  logIntoAccount
} from '../../../services/api/auth';
import { handleValidation } from '../../../utils/hooks/useAuth';

const withAuth = Component => props => {
  const { loginAuth } = props;

  const { authCredentials, handleOnChange, handleCleanFields } = useAuth({
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
        handleCleanFields,
        submitEvent,
        validation,
      }}
    />
  );
}

export default withAuth;