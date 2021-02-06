import React from 'react';
import { Layout } from '../components/common';
import { LoginAndSignup } from '../components/auth';
import { withPrivateRoute } from '../components/HOC';

const LoginPage = () => {
  return (
    <Layout>
      <LoginAndSignup
        loginAuth
      />
    </Layout>
  );
}

export default withPrivateRoute(LoginPage);