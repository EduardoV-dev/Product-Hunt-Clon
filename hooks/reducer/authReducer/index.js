import {
  SAVE_ERRORS,
  SAVE_USER_STATE,
  SAVE_LOADING
} from './types';

const authReducer = (state, action) => {
  switch (action.type) {
    case SAVE_USER_STATE: 
      return {
        ...state,
        user: action.payload
      }
    case SAVE_ERRORS: 
      return {
        ...state,
        errors: action.payload
      }
    case SAVE_LOADING:
      return {
        ...state, 
        loading: action.payload
      }
    default:
      return state;
  }
}

export default authReducer;