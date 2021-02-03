import { auth } from '../firebase';

export const createAccount = async userAccount => {
  const { username, email, password } = userAccount;
  try {
    (await auth.createUserWithEmailAndPassword(email, password)).user.updateProfile({
      displayName: username
    });
    console.log('Cuenta creada');
  } catch (e) {
    console.log(e);
  }
}

export const logIntoAccount = async userAccount => {
  const { email, password } = userAccount;
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log('dentro');
  } catch (e) {
    console.log(e);
  }
}

export const logOut = async () => {
  try {
    await auth.signOut();
  } catch (e) {
    console.log(e);
  }
}