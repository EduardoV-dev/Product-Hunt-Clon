import React, { useEffect } from 'react';
import { Header, Main } from '../index';
import { Wrapper } from '../../ui';

const Layout = ({
  children,
  main
}) => (
  <>
    <Header />
    <Main {...{ main }}>
      <Wrapper>
        {children}
      </Wrapper>
    </Main>
  </>
);

export default Layout;