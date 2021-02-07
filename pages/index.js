import React, { useEffect } from 'react';
import { Layout } from '../components/common';
import { ProductsList } from '../components/homeAndPopular';
import { withPrivateRoute } from '../components/HOC';
import { handleSavePosts } from '../redux/handlers/post';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(handleSavePosts()), []);

  return (  
    <Layout main='true'>
      <ProductsList />
    </Layout>
  );
}
 
export default withPrivateRoute(Home);