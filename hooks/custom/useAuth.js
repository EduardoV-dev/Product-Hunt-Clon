import { useState } from 'react';

const useAuth = initialState => {
  const [authCredentials, setAuthCredentials] = useState(initialState);

  const handleOnChange = ({ target }) =>
    setAuthCredentials({ ...authCredentials, [target.name]: target.value });

  const handleCleanFields = () =>
    setAuthCredentials({ ...initialState });

  return { authCredentials, handleOnChange, handleCleanFields };
}

export default useAuth;