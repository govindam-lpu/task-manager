import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB2EEbZp6eVR8LHoO93cr4o22UTaf10T1k",
  authDomain: "task-manager-9424d.firebaseapp.com",
  projectId: "task-manager-9424d",
  storageBucket: "task-manager-9424d.appspot.com",
  messagingSenderId: "569388912962",
  appId: "1:569388912962:web:724c5d51ed812a5968f8db"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth, collection, getDocs, addDoc, updateDoc, deleteDoc, doc };