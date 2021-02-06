import { useState } from 'react';

const useAuth = initialState => {
  const [authCredentials, setAuthCredentials] = useState(initialState);

  const handleOnChange = ({ target }) =>
    setAuthCredentials({ ...authCredentials, [target.name]: target.value });

  return { authCredentials, handleOnChange };
}

export default useAuth;