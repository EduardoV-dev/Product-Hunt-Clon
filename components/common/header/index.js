import React from 'react';
import { Navbar } from '../index';
import { Wrapper } from '../../ui';
import s from './header.module.scss';

const Header = () => {
  return (  
    <header className={s.header}>
      <Wrapper>
        <Navbar />
      </Wrapper>
    </header>
  );
}
 
export default Header;