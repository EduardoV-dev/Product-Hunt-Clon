import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { handleAuthState } from '../../../redux/handlers/auth';

const withPrivateRoute = Component => props => {
  const { user, loading } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const { pathname, push } = useRouter();

  const handleRoutes = () => {
    if (loading) return;

    if (user && (pathname === '/ingresar' || pathname === '/registrarse')) 
      return push('/');
    if (!user && pathname === '/nuevo-producto')
      return push('/ingresar');
  }

  useEffect(() => {
    if (loading) dispatch(handleAuthState());
    handleRoutes();
  }, [user, loading]);

  return (
    <>
      {!loading && (
        <Component {...props} />
      )}
    </>
  )
}

export default withPrivateRoute;