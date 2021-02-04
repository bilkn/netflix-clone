import Firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  apiKey: 'AIzaSyDgwYz2mg5iNYQm_TnBoElwQjOfSyGh9-g',
  authDomain: 'netflix-clone-53363.firebaseapp.com',
  projectId: 'netflix-clone-53363',
  storageBucket: 'netflix-clone-53363.appspot.com',
  messagingSenderId: '332118258790',
  appId: '1:332118258790:web:1596783eefe3538d1429a7',
  measurementId: 'G-GCFJLBQSYG',
};

const firebase = Firebase.initializeApp(config);


export { firebase };
