import {
  SAVE_USER_STATE,
  SAVE_ERRORS,
  SAVE_LOADING,
} from '../../types/auth';

export const saveUserStateAction = user => ({
  type: SAVE_USER_STATE,
  payload: user
});

export const saveErrorsAction = errors => ({
  type: SAVE_ERRORS,
  payload: errors
});

export const saveLoadingAction = loading => ({
  type: SAVE_LOADING,
  payload: loading
});