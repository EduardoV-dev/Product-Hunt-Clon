import React, { useEffect } from 'react';
import { withPrivateRoute } from '../components/HOC';
import { Layout } from '../components/common';
import { LoginAndSignup } from '../components/auth';
import { useAuth } from '../hooks/context/authContext';

const LoginPage = () => {
  const { handleClearErrorsLog } = useAuth();
  
  // eslint-disable-next-line
  useEffect(() => handleClearErrorsLog(), []);

  return (  
    <Layout>
      <LoginAndSignup 
        loginAuth
      />
    </Layout>
  );
}
 
export default withPrivateRoute(LoginPage);