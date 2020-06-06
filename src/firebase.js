import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBQjHvDzx91TSVZmGkpSraVDQ9LvXR9J3I",
    authDomain: "noted-5c380.firebaseapp.com",
    databaseURL: "https://noted-5c380.firebaseio.com",
    projectId: "noted-5c380",
    storageBucket: "noted-5c380.appspot.com",
    messagingSenderId: "375527967026",
    appId: "1:375527967026:web:22b21334f97ed43b4def2b",
    measurementId: "G-4PFJG5EZM9"
  };

  firebase.initializeApp(config);
export default firebase