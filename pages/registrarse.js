import React from 'react';
import { withPrivateRoute } from '../components/HOC';
import { Layout } from '../components/common';
import { LoginAndSignup } from '../components/auth';

const SignUpPage = () => (
  <Layout>
    <LoginAndSignup />
  </Layout>
);

export default withPrivateRoute(SignUpPage);