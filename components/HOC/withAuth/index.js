import React from 'react';
import useAuth from '../../../hooks/custom/useAuth';
import {
  createAccount,
  logIntoAccount
} from '../../../services/api/auth';
import { handleValidation } from '../../../utils/hooks/useAuth';
import { useAuth as authContext } from '../../../hooks/context/authContext';

const withAuth = Component => props => {
  const { loginAuth } = props;
  const { handleClearErrorsLog } = authContext();

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