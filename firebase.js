import firebase from 'firebase';
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBOVR2Me7jmPdv5x0-N4f7I2apiAnyPQnc",
    authDomain: "whatsapp2-b71a9.firebaseapp.com",
    projectId: "whatsapp2-b71a9",
    storageBucket: "whatsapp2-b71a9.appspot.com",
    messagingSenderId: "637451018819",
    appId: "1:637451018819:web:a5fd8f51dcb1f51cb02af6"
  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore(); // Firestore
  const auth = app.auth(); // Authentication
  const provider = new firebase.auth.GoogleAuthProvider(); // Google Authentication Provider
  
  export { db, auth, provider };
