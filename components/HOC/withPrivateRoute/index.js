import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../hooks/context/authContext';

const withPrivateRoute = Component => props => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
      return null;
    }
  }, [user]);

  return (
    <Component {...props} />
  )
}

export default withPrivateRoute;