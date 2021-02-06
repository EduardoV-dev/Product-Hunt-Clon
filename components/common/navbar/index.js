import React from 'react';
import Link from 'next/link';
import { Search } from '../index';
import { Button } from '../../ui';
import s from './navbar.module.scss';
import { useSelector } from 'react-redux';
import { handleLogout } from '../../../redux/handlers/auth';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { user, loading } = useSelector(state => state.auth);
  const router = useRouter();

  const logout = async () => {
    try {
      await handleLogout();
      router.push('/ingresar');
    } catch (e) {
      console.log(e);
    }
  }

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
        {(!user && !loading) ? (
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
              {!loading && (
                <>
                  <p className={s.nav_user}>{user.displayName}</p>
                  <Button
                    variant='primary'
                    onClick={logout}
                  >Cerrar Sesión</Button>
                </>
              )}
            </>
          )}
      </div>

    </nav>
  );
}

export default Navbar;