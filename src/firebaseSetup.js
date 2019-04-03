import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAydW1oRmlnlulzzzWlRM_AbZnkUPVX0-I",
    authDomain: "moveit-app.firebaseapp.com",
    databaseURL: "https://moveit-app.firebaseio.com",
    projectId: "moveit-app",
    storageBucket: "moveit-app.appspot.com",
    messagingSenderId: "1050216548166"
};

firebase.initializeApp(config);