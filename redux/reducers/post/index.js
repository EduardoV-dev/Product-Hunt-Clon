import {
  SAVE_ERRORS,
  SAVE_CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  SAVE_POSTS,
} from '../../types/post';

const initialState = {
  errors: {},
  loading: false,
  posts: [],
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    case SAVE_CREATE_POST:
      return {
        ...state,
        loading: true
      }
    case CREATE_POST_SUCCESS:
    case CREATE_POST_ERROR:
      return {
        ...state,
        loading: action.payload
      }
    case SAVE_POSTS: 
      return {
        ...state,
        posts: action.payload
      }
    default:
      return { ...state };
  }
}

export default postReducer;