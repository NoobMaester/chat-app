import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { User } from 'firebase/auth'

export const saveUserToFirestore = async (user: User) => {
  const userRef = doc(db, 'users', user.uid)
  const docSnap = await getDoc(userRef)

  if (!docSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      createdAt: new Date().toISOString(),
    })
  }
}
