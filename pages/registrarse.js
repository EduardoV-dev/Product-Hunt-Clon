import React from 'react';
import { Layout } from '../components/common';
import { LoginAndSignup } from '../components/auth';
import { withPrivateRoute } from '../components/HOC';

const SignUpPage = () => {
  return (
    <Layout>
      <LoginAndSignup />
    </Layout>
  );
}

export default withPrivateRoute(SignUpPage);