import { createContext, useContext, useReducer } from 'react';
import { preventDefault } from '../../../utils/common';
import postReducer from '../../reducer/postReducer';

const postContext = createContext();

export const usePost = useContext(postContext);

const PostProvider = ({ children }) => {
  const initialState = { 
    
  }

  const [state, dispatch] = useReducer(postReducer, initialState);

  
  const handleOnSubmit = (e, post) => {
    preventDefault(e);
    console.log(post);
  }
  
  const contextValues = {
    handleOnSubmit,
  }

  return (
    <postContext.Provider
      value={contextValues}
    >
      {children}
    </postContext.Provider>
  )
}

export default PostProvider;