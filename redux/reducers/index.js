import { combineReducers } from 'redux';
import authReducer from './auth';
import postReducer from './post';

const reducer = combineReducers({
  auth: authReducer,
  post: postReducer,
});

export default reducer;