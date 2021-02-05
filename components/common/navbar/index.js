import React from 'react';
import Link from 'next/link';
import { Search } from '../index';
import { Button } from '../../ui';
import s from './navbar.module.scss';
import { useAuth } from '../../../hooks/context/authContext';

const Navbar = () => {
  const { user, handleLogout } = useAuth();

  return (
    <nav className={s.nav}>
      <div className={s.nav_left}>
        <Link href='/'>
          <h1 className={s.nav_logo}>P</h1>
        </Link>
        <Search />
        <div>
          <Link href='/'>
            <a className={s.nav_link}>Inicio</a>
          </Link>
          <Link href='/populares'>
            <a href="#!" className={s.nav_link}>Populares</a>
          </Link>
          {user && (
            <Link href='/nuevo-producto'>
              <a href="" className={s.nav_link}>Agregar producto</a>
            </Link>
          )}
        </div>
      </div>
      <div className={s.nav_actions}>
        {!user ? (
          <>
            <Button
              variant='primary'
            >
              <Link href='/ingresar'>
                <span style={{ color: '#f2f2f2' }}>Ingresar</span>
              </Link>
            </Button>

            <Button
              variant='secondary'
            >
              <Link href='/registrarse'>
                <span style={{ color: '#000' }}>Registrarse</span>
              </Link>
            </Button>
          </>
        ) : (
            <>
              <p className={s.nav_user}>{user.displayName}</p>
              <Button
                variant='primary'
                onClick={handleLogout}
              >Cerrar Sesión</Button>
            </>
          )}
      </div>

    </nav>
  );
}

export default Navbar;