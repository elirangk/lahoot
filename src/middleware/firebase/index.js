//This is DATABASE INSTANCE - DEFINING CONNECTION to firebase tools
import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp( {

    apiKey: "AIzaSyCcU6cSH20iONyP5EYnr0TlSaP8SKa6e8M",
    authDomain: "lahoot-x.firebaseapp.com",
    databaseURL: "https://lahoot-x-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lahoot-x",
    storageBucket: "lahoot-x.appspot.com",
    messagingSenderId: "398178457473",
    appId: "1:398178457473:web:1a95c85665454c9109fa80",
    measurementId: "G-47GD3HGLHZ"

});

export default {
    firebase
}