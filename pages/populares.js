import React from 'react';
import { Layout } from '../components/common';
import { ProductsList } from '../components/homeAndPopular';

const Populares = () => {
  return (  
    <Layout main='true'>
      <ProductsList />
    </Layout>
  );
}

export default Populares;