import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    typeof window === 'object' &&
      typeof __REDUX_DEVTOOLS_EXTENSION__
      ? __REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;