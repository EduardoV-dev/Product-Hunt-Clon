import { useState } from 'react';

const useProduct = initialState => {
  const [productInput, setProductInput] = useState(initialState);

  const handleOnChange = ({ target }) => {
    if (target.name === 'image') {
      setProductInput({ ...productInput, [target.name]: target });
    } else {
      setProductInput({ ...productInput, [target.name]: target.value });
    }
  }

  return { productInput, handleOnChange }
}

export default useProduct;