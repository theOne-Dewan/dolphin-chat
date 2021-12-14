import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDt4vXs49laxl7eDOvOJAs4UkPMsIlstSk",
    authDomain: "dolphin-chat-25839.firebaseapp.com",
    projectId: "dolphin-chat-25839",
    storageBucket: "dolphin-chat-25839.appspot.com",
    messagingSenderId: "114066302481",
    appId: "1:114066302481:web:1cb903785af7044c60f3b0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };