import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBUOHrpS1sXhBIz3dWv-jHiU7T4VFRH5Z0",
    authDomain: "sample-ecommerce-dcf7c.firebaseapp.com",
    databaseURL: "https://sample-ecommerce-dcf7c.firebaseio.com",
    projectId: "sample-ecommerce-dcf7c",
    storageBucket: "sample-ecommerce-dcf7c.appspot.com",
    messagingSenderId: "846736596387",
    appId: "1:846736596387:web:9c7451b6ec25c92844ce16",
    measurementId: "G-H8NLFY54H3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Sign in with Google
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

//Sign in with Facebook
const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;
