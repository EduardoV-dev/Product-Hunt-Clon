import { db, storage } from '../firebase';

export const handleCreateNewPost = (post, user) =>
  new Promise(async (resolve, reject) => {
    const { image } = post;
    try {
      post = {
        ...post,
        image: await uploadImageAndGetURL(image),
        userId: user.uid,
        postedBy: user.displayName,
        createdAt: Date.now(),
        comments: [],
        votes: [],
      }
      await db.collection('posts').add(post);
      resolve(image);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });

const uploadImageAndGetURL = (image) =>
  new Promise((resolve, reject) => {
    const uploadedFile = storage.ref(`posts/${image.name}`).put(image);
    uploadedFile.on(
      'state_changed',
      snapshot => { },
      err => console.log(err),
      () => {
        storage
          .ref('posts')
          .child(image.name)
          .getDownloadURL()
          .then(url => resolve(url))
          .catch(e => reject(e));
      }
    );
  });

export const getPostById = postId => 
  new Promise(async (resolve, reject) => {
    try {
      const post = await (await db.collection('posts').doc(postId).get()).data();
      resolve(post);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });