import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyCYDqeCQUhHTIJy0_70b9eKHuCpkINXsEY",
    authDomain: "aladinoo.firebaseapp.com",
    databaseURL: "https://aladinoo.firebaseio.com",
    projectId: "aladinoo",
    storageBucket: "aladinoo.appspot.com",
    messagingSenderId: "736881154753"
  };

firebase.initializeApp(config);
firebase.firestore()
const storage = firebase.storage();

export {
    storage, firebase as default
}
