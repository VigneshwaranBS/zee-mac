import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB59nJgTtJVtfyvHhJTZ4QAL3fukeqC-cw",
    authDomain: "v-f-practise.firebaseapp.com",
    projectId: "v-f-practise",
    storageBucket: "v-f-practise.appspot.com",
    messagingSenderId: "673528263039",
    appId: "1:673528263039:web:23a0d538944b1e5036ea4a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export{db};