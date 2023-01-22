import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhAGeIqfHsDOn3V4rkuchNYFv0JTeq5YE",
    authDomain: "music-app-a5a4c.firebaseapp.com",
    projectId: "music-app-a5a4c",
    storageBucket: "music-app-a5a4c.appspot.com",
    messagingSenderId: "1043165730616",
    appId: "1:1043165730616:web:5dd2653059468489c693cd",
    measurementId: "G-82KFGG6NBC"
};

// Initialize Firebase app
initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
const db = getFirestore();

// Get a list of musics from your database
const musicsRef = collection(db, 'musics');
const musicsSnapshot = await getDocs(musicsRef);
export const musicsList = musicsSnapshot.docs.map(doc => doc.data());


const docData = {
    title: "Oh Humsafar",
    src: 'https://docs.google.com/uc?export=download&id=1w1brmCO8EpeSRxD0WunfRAZwlt1aa9vt',
    songImgsrc: 'https://c.saavncdn.com/309/Oh-Humsafar-Hindi-2018-20180416-500x500.jpg',
    artist: 'Neha K, Tony K',
    category: 'Popular Hindi'
};
await setDoc(doc(db, "musics", "1w1brmCO8EpeSRxD0WunfRAZwlt1aa9vt"), docData);