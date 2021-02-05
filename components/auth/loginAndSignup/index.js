import React, { useEffect } from 'react';
import { withAuth } from '../../HOC';
import { Button, FormGroup } from '../../ui';
import { Error } from '../index';
import s from './loginAndSignup.module.scss';
import { useRouter } from 'next/router';
import { useAuth } from '../../../hooks/context/authContext';

const LoginAndSignUp = ({
  loginAuth,
  authCredentials,
  handleOnChange,
  submitEvent,
  validation,
  handleClearErrorsLog,
}) => {
  const { errors, handleOnSubmit } = useAuth();
  const { username, email, password } = authCredentials;
  const router = useRouter();

  const handleLocalSubmit = async e => {
    try {
      await handleOnSubmit(e, authCredentials, submitEvent, validation);
      router.push('/');
    } catch (e) {
      console.log(e);
    }
  }

  // eslint-disable-next-line
  useEffect(() => handleClearErrorsLog(), []);

  return (
    <div className={s.container}>
      <h2 className={s.headline}>
        {!loginAuth ? 'Crear Cuenta' : 'Iniciar Sesión'}
      </h2>
      <form className={s.form} noValidate
        onSubmit={handleLocalSubmit}
      >
        {!loginAuth && (
          <FormGroup
            label='Nombre de usuario'
            placeholder='Usuario1234'
            type='text'
            autoComplete='off'
            name='username'
            value={username}
            onChange={handleOnChange}
          />
        )}
        {(!loginAuth && errors.username) && (
          <Error message={errors.username} />
        )}
        <FormGroup
          label='Email'
          placeholder='correo@correo.com'
          type='email'
          autoComplete='off'
          name='email'
          value={email}
          onChange={handleOnChange}
        />
        {errors.email && (
          <Error message={errors.email} />
        )}
        <FormGroup
          label='Contraseña'
          type='password'
          placeholder='123456'
          autoComplete='off'
          name='password'
          value={password}
          onChange={handleOnChange}
        />
        {errors.password && (
          <Error message={errors.password} />
        )}
        {errors.authIssue && (
          <Error message={errors.authIssue} />
        )}
        <Button
          type='submit'
          variant='primary'
          block='true'
        >
          {!loginAuth ? 'Crear Cuenta' : 'Iniciar Sesión'}
        </Button>
      </form>
    </div>
  );
}

export default withAuth(LoginAndSignUp);