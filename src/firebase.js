import firebase from 'firebase/app';
import 'firebase/storage'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyCCkRuzmxVeVYlwjhIMtQ1QufZnaWOY3Bo",
    authDomain: "drive-clone-c11d3.firebaseapp.com",
    projectId: "drive-clone-c11d3",
    storageBucket: "drive-clone-c11d3.appspot.com",
    messagingSenderId: "967053751616",
    appId: "1:967053751616:web:c2899696506ac0b90cb6a5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  const db = firebaseApp.firestore();

  export { auth, provider, db , storage }