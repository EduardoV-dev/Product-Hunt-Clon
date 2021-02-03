import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { auth } from '../../../services/firebase';
import authReducer from '../../reducer/authReducer';
import { preventDefault } from '../../../utils/common';
import {
  saveUserStateAction,
  saveErrorsAction,
  saveLoadingAction
} from '../../reducer/authReducer/actions';
import { trimFields } from '../../../utils/hooks/useAuth';
import { useRouter } from 'next/router';
import { logOut } from '../../../services/api/auth';

const authContext = createContext();

export const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const initialState = {
    errors: {},
    user: null,
    loading: true,
  }

  const router = useRouter();

  const [state, dispatch] = useReducer(authReducer, initialState);

  const { errors, user, loading } = state;

  // Will handle the authentication credentials for signup or login
  // then will be used for creating an account or login into one
  const handleOnSubmit = (e, authCredentials, submitEvent, validation, cleanFields) => {
    preventDefault(e);
    const credentials = trimFields(authCredentials);
    const errors = validation(credentials);

    if (JSON.stringify(errors) !== '{}')
      return dispatch(saveErrorsAction(errors));

    dispatch(saveErrorsAction({}));
    submitEvent(credentials);
    cleanFields();
    router.push('/');
  }

  const handleAuthState = () =>
    auth.onAuthStateChanged(user => {
      dispatch(saveUserStateAction(user));
      dispatch(saveLoadingAction(false));
    });

  const logout = () => {
    logOut();
    router.push('/ingresar');
  }

  useEffect(() => {
    handleAuthState();
  }, []);

  const contextValues = {
    errors,
    user,
    handleOnSubmit,
    handleAuthState,
    logout
  }

  return (
    <authContext.Provider
      value={contextValues}
    >
      {!loading && children}
    </authContext.Provider>
  )
}

export default AuthProvider;