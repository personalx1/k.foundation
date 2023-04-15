const firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyALrdqQmHIRmursqG4QXMxpgZzhByL5wzc",
  authDomain: "kf22-35ddb.firebaseapp.com",
  projectId: "kf22-35ddb",
  storageBucket: "kf22-35ddb.appspot.com",
  messagingSenderId: "701212258416",
  appId: "1:701212258416:web:7fc7794b3d08fbdbf0c4b5",
  measurementId: "G-B44D9P0BJW"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const userx = db.collection("users");

module.exports = userx 




