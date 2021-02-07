import React, { useEffect } from 'react';
import { Layout } from '../../components/common';
import { PostAside, PostInfo } from '../../components/post';
import { withPrivateRoute } from '../../components/HOC';
import { useRouter } from 'next/router';
import s from './[id].module.scss';
import { handleSelectPost } from '../../redux/handlers/post';
import { useDispatch, useSelector } from 'react-redux';

const Post = () => {
  const { query: { id } } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => dispatch(handleSelectPost(id)), []);
  const { selectedPost } = useSelector(state => state.post);
  if (!selectedPost) return null;
  const { product } = selectedPost;

  return (
    <Layout>
      <h1 className={s.post_headline}>{product}</h1>
      <div className={s.post_grid}>
        <PostInfo />
        <PostAside />
      </div>
    </Layout>
  );
}

export default withPrivateRoute(Post);