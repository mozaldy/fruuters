import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBpcciTXyAJMjikhFjBpeve9PmhpkWU4CM',
  authDomain: 'fruuters.firebaseapp.com',
  projectId: 'fruuters',
  storageBucket: 'fruuters.appspot.com',
  messagingSenderId: '451851486618',
  appId: '1:451851486618:web:45292e6b65e699a536e623',
  measurementId: 'G-649Y2M0QB5'
})

// used for the firestore refs
export const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')
