import { preventDefault, pipe } from '../../../utils/common';
import { trimFields, handleValidation } from '../../../utils/post';
import { createPostErrorAction, createPostSuccessAction, saveCreatePostAction, saveErrorsAction, savePostsAction } from '../../actions/post';
import { handleCreateNewPost } from '../../../services/api/post';
import { db } from '../../../services/firebase';

export const handleOnSubmit = (e, product, user) => dispatch =>
  new Promise(async (resolve, reject) => {
    const { errors, credentials } = pipe(
      preventDefault(e),
      trimFields,
      handleValidation,
    )(product);

    if (JSON.stringify(errors) !== '{}')
      return dispatch(saveErrorsAction(errors));

    dispatch(handleClearErrorsLog());
    dispatch(saveCreatePostAction());

    try {
      await handleCreateNewPost(credentials, user);
      dispatch(createPostSuccessAction());
      resolve();
    } catch (e) {
      console.log(e);
      dispatch(saveErrorsAction({ authIssue: e }));
      dispatch(createPostErrorAction());
      reject('Error on creating a product');
    }
  });

export const handleClearErrorsLog = () => dispatch =>
  dispatch(saveErrorsAction({}));

export const handleSavePosts = () => dispatch => {
  db.collection('posts').onSnapshot(snapshot => {
    const posts = snapshot.docs.map(post =>
      ({ id: post.id, ...post.data() })
    );

    dispatch(savePostsAction(posts));
  });
}