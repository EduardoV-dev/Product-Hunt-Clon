import React, { useEffect } from 'react';
import { Header, Main } from '../index';
import { Wrapper } from '../../ui';
import { useDispatch, useSelector } from 'react-redux';
import { handleAuthState } from '../../../redux/handlers/auth';

const Layout = ({
  children,
  main
}) => {
  return (
    <>
      <Header />
      <Main {...{ main }}>
        <Wrapper>
          {children}
        </Wrapper>
      </Main>
    </>
  );
}

export default Layout;