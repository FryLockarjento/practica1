const admin = require('firebase-admin');
const firebase = require('firebase');
const serviceAccount = require('../serviceAccount.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var firebaseConfig = {
    apiKey: "AIzaSyDJuaq260AnhfPytD0YAxTfeY_xGmBCU6Y",
    authDomain: "prueba2-10b73.firebaseapp.com",
    projectId: "prueba2-10b73",
    storageBucket: "prueba2-10b73.appspot.com",
    messagingSenderId: "677965294288",
    appId: "1:677965294288:web:88ef787a04a30ac7574cd5",
    measurementId: "G-YQECYPKQJJ"
};

firebase.initializeApp(firebaseConfig);