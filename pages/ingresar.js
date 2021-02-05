import React from 'react';
import { withPrivateRoute } from '../components/HOC';
import { Layout } from '../components/common';
import { LoginAndSignup } from '../components/auth';

const LoginPage = () => (
  <Layout>
    <LoginAndSignup
      loginAuth
    />
  </Layout>
);

export default withPrivateRoute(LoginPage);