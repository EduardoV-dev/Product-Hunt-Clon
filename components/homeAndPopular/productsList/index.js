import React from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../index';
import s from './productsList.module.scss';

const ProductsList = () => {
  const { posts } = useSelector(state => state.post);

  return (
    <section className={s.list}>
      {posts.map(post => (
        <Product
          key={post.id}
          post={post}
        />
      ))}
    </section>
  );
}

export default ProductsList;