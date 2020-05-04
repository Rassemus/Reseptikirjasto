import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2tK-w_p36tJmVgrhuTGYyhsdg-hELKMg',
  authDomain: 'reseptikirjasto-6ee50.firebaseapp.com',
  databaseURL: 'https://reseptikirjasto-6ee50.firebaseio.com',
  projectId: 'reseptikirjasto-6ee50',
  storageBucket: 'reseptikirjasto-6ee50.appspot.com',
  messagingSenderId: '329187962823',
  appId: '1:329187962823:web:f434b03ca7477f065fb3e2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
