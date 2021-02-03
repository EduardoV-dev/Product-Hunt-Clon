import React from 'react';
import { Layout } from '../components/common';
import { LoginAndSignup } from '../components/auth';

const LoginPage = () => {
  return (  
    <Layout>
      <LoginAndSignup 
        loginAuth
      />
    </Layout>
  );
}
 
export default LoginPage;