import { 
  SAVE_ERRORS,
  SAVE_CREATE_POST,
  CREATE_POST_ERROR,
  CREATE_POST_SUCCESS,
  SAVE_POSTS,
  SAVE_SELECTED_POST,
 } from '../../types/post';

export const saveErrorsAction = errors => ({
  type: SAVE_ERRORS,
  payload: errors
});

export const saveCreatePostAction = () => ({
  type: SAVE_CREATE_POST,
});

export const createPostErrorAction = () => ({
  type: CREATE_POST_ERROR,
  payload: false
});

export const createPostSuccessAction = () => ({
  type: CREATE_POST_SUCCESS,
  payload: true,
})

export const savePostsAction = posts => ({
  type: SAVE_POSTS,
  payload: posts,
});

export const saveSelectedPostAction = post => ({
  type: SAVE_SELECTED_POST,
  payload: post,
});