// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { 
    getAuth,
    //eslint-disable-next-line
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCuOjU9yBpo8EcxzEt3NEKG3nqk0iotelM",
  authDomain: "e-commerce-e74b9.firebaseapp.com",
  projectId: "e-commerce-e74b9",
  storageBucket: "e-commerce-e74b9.appspot.com",
  messagingSenderId: "206958841594",
  appId: "1:206958841594:web:ecdfa023143f5eb29fc343",
  measurementId: "G-K0CV2H5YB5"
};

// Initialize Firebase
//eslint-disable-next-line
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

 export const db = getFirestore();
export const addCollectionAndDocuments = async (collectionKey,objectsToAdd)  => {
  const collectionRef = collection(db,collectionKey)
  const batch = writeBatch(db);
  objectsToAdd.forEach((object)=> {
    const docRef = doc(collectionRef,object.title.toLowerCase())
    batch.set(docRef,object)
  })
  await batch.commit()
  console.log("done")
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'catagories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
export const createUserDocumentFromAuth = async (userAuth,additionalInformation) => {
  if(!userAuth) return;
  const userDocRef = doc(db,'users',userAuth.uid);
  
  const userSnapShot = await getDoc(userDocRef)
  
  if(!userSnapShot.exists()) {
    const {displayName,email} = userAuth;
    const createdAt  = new Date();
    
    try {
    await setDoc(userDocRef,{
      displayName,
      email,
      createdAt,
      ...additionalInformation
    })  
    } catch (error) {
      console.log('error creating user',error.message);
    }
  }

  return userDocRef;
} 

export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth,email,password)
}

export const signINAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;
  
  return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async () => {await signOut(auth)}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);