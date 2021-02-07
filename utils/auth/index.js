export const trimFields = values => ({
  username: values.username.trim(),
  email: values.email.trim(),
  password: values.password.trim(),
});

export const handleValidation = type => (credentials) => {
  if (JSON.stringify(credentials) === '{}') return null;
  const { username, email, password } = credentials;
  const errors = {};

  switch (type) {
    case 'login':
      if (email === '') {
        errors.email = 'Ingrese el email';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.email = 'El email ingresado no es válido';
      }

      if (password === '') {
        errors.password = 'Ingrese su contraseña';
      } else if (password.length < 6) {
        errors.password = 'La contraseña debe tener una longitud de al menos 6 caracteres';
      }
      break;
    case 'signup':
      if (username === '') {
        errors.username = 'Ingrese el nombre de usuario';
      }

      if (email === '') {
        errors.email = 'Ingrese el email';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.email = 'El email ingresado no es válido';
      }

      if (password === '') {
        errors.password = 'Ingrese su contraseña';
      } else if (password.length < 6) {
        errors.password = 'La contraseña debe tener una longitud de al menos 6 caracteres';
      }
      break;
    default:
      break;
  }

  return { errors, credentials };
}