import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyATjIpVQMhIPh7LK_fco4zT-Taoy3oVucY",
  authDomain: "ozzyreactapp.firebaseapp.com",
  databaseURL: "https://ozzyreactapp.firebaseio.com",
  projectId: "ozzyreactapp",
  storageBucket: "ozzyreactapp.appspot.com",
  messagingSenderId: "551430699774"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
