import React from 'react';
import { Product } from '../index';
import s from './productsList.module.scss';

const ProductsList = () => {
  return (  
    <section className={s.list}>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </section>
  );
}
 
export default ProductsList;