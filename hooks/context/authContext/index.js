import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { auth } from '../../../services/firebase';
import authReducer from '../../reducer/authReducer';
import { preventDefault } from '../../../utils/common';
import {
  saveUserStateAction,
  saveErrorsAction,
  saveLoadingAction
} from '../../reducer/authReducer/actions';
import { useRouter } from 'next/router';
import { trimFields } from '../../../utils/hooks/useAuth';
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
  const handleOnSubmit = (e, authCredentials, submitEvent, validation) =>
    new Promise(async (resolve, reject) => {
      preventDefault(e);
      const credentials = trimFields(authCredentials);
      const errors = validation(credentials);

      if (JSON.stringify(errors) !== '{}')
        return dispatch(saveErrorsAction(errors));

      dispatch(saveErrorsAction({}));

      try {
        await submitEvent(credentials, dispatch);
        resolve();
      } catch (e) {
        console.log(e);
        dispatch(saveErrorsAction({ authIssue: e }));
        reject('Error on Auth Event');
      }
    });


  const handleAuthState = () =>
    auth.onAuthStateChanged(user => {
      dispatch(saveUserStateAction(user));
      dispatch(saveLoadingAction(false));
    });

  const handleLogout = () => {
    logOut();
    router.push('/ingresar');
  }

  const handleClearErrorsLog = () =>
    dispatch(saveErrorsAction({}));

  useEffect(() => {
    handleAuthState();
  }, []);

  const contextValues = {
    errors,
    user,
    loading,
    handleOnSubmit,
    handleAuthState,
    handleLogout,
    handleClearErrorsLog,
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