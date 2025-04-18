
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from './../firebase/config'
import { saveUserToFirestore } from './saveUserToFirestore'

export const register = async (email: string, password: string) => {
  if (!auth) throw new Error('Firebase Auth is not initialized');
  const response = await createUserWithEmailAndPassword(auth, email, password)
  await saveUserToFirestore(response.user)
  return response
}
export const login = async (email: string, password: string) => {
  if (!auth) throw new Error('Firebase Auth is not initialized');
  return await signInWithEmailAndPassword(auth, email, password)
}
export const logout = async () => {
  if (!auth) throw new Error('Firebase Auth is not initialized');
  return await signOut(auth)
}
export const loginWithGoogle = async () => {
  if (!auth) throw new Error('Firebase Auth is not initialized');
  const provider = new GoogleAuthProvider()
  const response = await signInWithPopup(auth, provider)
  await saveUserToFirestore(response.user)
  return response
}
