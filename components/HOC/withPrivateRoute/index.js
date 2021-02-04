import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../hooks/context/authContext';

const withPrivateRoute = Component => props => {
  const { user } = useAuth();
  const router = useRouter();

  if (user) {
    router.push('/');
    return null;
  }

  return (
    <Component {...props} />
  )
}

export default withPrivateRoute;