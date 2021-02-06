import { auth } from '../../../services/firebase';
import { pipe, preventDefault } from '../../../utils/common';
import {
  saveUserStateAction,
  saveErrorsAction,
  saveLoadingAction
} from '../../actions/auth';
import { trimFields } from '../../../utils/hooks/useAuth';
import { logOut } from '../../../services/api/auth';

// Will handle the authentication credentials for signup or login
// then will be used for creating an account or login into one
export const handleOnSubmit = (e, {
  authCredentials,
  submitEvent,
  validation,
}) => dispatch =>
    new Promise(async (resolve, reject) => {
      const { errors, credentials } = pipe(
        preventDefault(e),
        trimFields,
        validation,
      )(authCredentials);

      if (JSON.stringify(errors) !== '{}')
        return dispatch(saveErrorsAction(errors));

      dispatch(saveErrorsAction({}));

      try {
        await submitEvent(credentials);
        resolve();
      } catch (e) {
        console.log(e);
        dispatch(saveErrorsAction({ authIssue: e }));
        reject('Error on Auth Event');
      }
    });

export const handleAuthState = () => dispatch =>
  auth.onAuthStateChanged(user => {
    dispatch(saveUserStateAction(user));
    dispatch(saveLoadingAction(false));
  });

export const handleLogout = async () => {
  try {
    await logOut();
  } catch (e) {
    console.log(e);
  }
}

export const handleClearErrorsLog = () =>
  dispatch(saveErrorsAction({}));


/* const AuthProvider = ({ children }) => {
  const initialState = {
    errors: {},
    user: null,
    loading: true,
  }


  const [state, dispatch] = useReducer(authReducer, initialState);
  const { errors, user, loading } = state;









  useEffect(() => {
    handleAuthState();
  }, []);

  const contextValues = {
    errors,
    user,
    loading,
    handleOnSubmit,
    handleAuthState,
    handleLogout,
    handleClearErrorsLog,
  }

  return (
    <authContext.Provider
      value={contextValues}
    >
      {!loading && children}
    </authContext.Provider>
  )
}

export default AuthProvider;*/