import React from 'react';
import { Layout } from '../components/common';
import NewProduct from '../components/newProduct';
import { withPrivateRoute } from '../components/HOC';

const NuevoProducto = () => {
  return (
    <Layout>
      <NewProduct />
    </Layout>
  );
}

export default withPrivateRoute(NuevoProducto);