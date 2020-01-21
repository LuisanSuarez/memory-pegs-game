// import * as firebase from "firebase/app";


// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/analytics";

// const admin = require('firebase-admin');

// let serviceAccount = require('./memory-pegs-firebase-adminsdk-khatv-2f1fbf57f7.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// let db = admin.firestore();


// const firebaseConfig = {
//     apiKey: "AIzaSyApba8vnH0Tr9qRKBBWOmTfauHWw_AJVDw",
//     authDomain: "memory-pegs.firebaseapp.com",
//     databaseURL: "https://memory-pegs.firebaseio.com",
//     projectId: "memory-pegs",
//     storageBucket: "memory-pegs.appspot.com",
//     messagingSenderId: "582619026049",
//     appId: "1:582619026049:web:6027000d0c70b3cc6bb380",
//     measurementId: "G-5N0SKFQJHD"
//   };

// // const firebaseConfig = {
// //     apiKey: process.env.APIKEY,
// //     authDomain: process.env.AUTHDOMAIN,
// //     databaseURL: process.env.DATABASEURL,
// //     projectId: process.env.DATABASEURL,
// //     storageBucket: process.env.STORAGEBUCKET,
// //     messagingSenderId: process.env.MESSAGINGSENDERID,
// //     appId: process.env.APPID,
// //     measurementId: process.env.MEASUREMENTID,
// //   };

// //   try {
// //     firebase.initializeApp({
// //       firebaseConfig,
// //     });
// //   } catch (err) {
// //     if (!/already exists/.test(err.message)) {
// //       console.error("Firebase initialization error", err.stack);
// //     }
// //   }

//   // !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
//   // firebase.analytics();
// //   firebase.initializeApp({firebaseConfig})
// //   db = firebase.firestore();


// export default db;
// //   export default !firebase.apps.length ? firebase.initializeApp({firebaseConfig}) : firebase.app();