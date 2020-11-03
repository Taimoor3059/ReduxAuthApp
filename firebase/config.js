import * as firebase from "firebase";
import "@firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBaFfpY6Zv9H0FUTVuKKH1GoHb4vbpktgQ",
    authDomain: "reduxapp-b095e.firebaseapp.com",
    databaseURL: "https://reduxapp-b095e.firebaseio.com",
    projectId: "reduxapp-b095e",
    storageBucket: "reduxapp-b095e.appspot.com",
    messagingSenderId: "374376129526",
    appId: "1:374376129526:web:4e0b0159339b3222c55dd7",
    measurementId: "G-F494QTZ5KK"
  };
  try {
      firebase.initializeApp(firebaseConfig)
  } catch(e){
      console.log('your error is ', e)
  }

export default firebase;