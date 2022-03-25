import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8dqVhsRXuxdU72ZuNbltoLo3Hqarp1aI",
  authDomain: "ali-86ebe.firebaseapp.com",
  projectId: "ali-86ebe",
  storageBucket: "ali-86ebe.appspot.com",
  messagingSenderId: "366288037576",
  appId: "1:366288037576:web:7ed607ae72a25833b527fd",
};

const app = !firebase.app.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();

  export default db; 