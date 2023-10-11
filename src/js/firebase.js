const firebase=require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyA6ZyQVZFfkLgucHLZdOhurm_uJDP__gys",
    authDomain: "registrationform-1f4b3.firebaseapp.com",
    projectId: "registrationform-1f4b3",
    storageBucket: "registrationform-1f4b3.appspot.com",
    messagingSenderId: "67544222636",
    appId: "1:67544222636:web:7a26419fa040aef132c809",
    measurementId: "G-LT3R5WTL54"
  };
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const User=db.collection("Users");
  module.exports = Users;