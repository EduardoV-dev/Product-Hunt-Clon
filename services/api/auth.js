import { auth } from '../firebase';

export const createAccount = user =>
  new Promise(async (resolve, reject) => {
    const { username, email, password } = user;
    try {
      await (await auth.createUserWithEmailAndPassword(email, password)).user.updateProfile({ displayName: username });
      resolve();
    } catch (e) {
      console.log(e);
      reject('El email ingresado ya está siendo utilizado');
    }
  });

export const logIntoAccount = user =>
  new Promise(async (resolve, reject) => {
    const { email, password } = user;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      resolve();
    } catch (e) {
      console.log(e);
      reject('El correo o la contraseña son incorrectos');
    }
  });

export const logOut = async () => {
  try {
    await auth.signOut();
  } catch (e) {
    console.log(e);
  }
}