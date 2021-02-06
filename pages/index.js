import React from 'react';
import { Layout } from '../components/common';
import { ProductsList } from '../components/homeAndPopular';
import { withPrivateRoute } from '../components/HOC';

const Home = () => {
  return (  
    <Layout main='true'>
      <ProductsList />
    </Layout>
  );
}
 
export default withPrivateRoute(Home);