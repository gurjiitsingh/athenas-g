//gurjiitsingh@gmail.com
//Cloud Firestore
//nextjs-course




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//gagurjiitsingh
const firebaseConfig = {
     // apiKey: "AIzaSyDaqxwPb9-rBzUKlTHtg_jzDgfvEq8TShw",
     // authDomain: "next-js-course-9dd89.firebaseapp.com",
     // databaseURL: "https://next-js-course-9dd89-default-rtdb.firebaseio.com",
     // projectId: "next-js-course-9dd89",
     // storageBucket: "next-js-course-9dd89.firebasestorage.app",
     // messagingSenderId: "448503250755",
     // appId: "1:448503250755:web:6dca62d578b710bce979f6",
     // measurementId: "G-RPKLNLDNDQ"

     apiKey: "AIzaSyCBn5FhjcF8qAfO623sx-NmT0Sa9v9t3_c",
  authDomain: "athenasgrill-5091f.firebaseapp.com",
  projectId: "athenasgrill-5091f",
  storageBucket: "athenasgrill-5091f.firebasestorage.app",
  messagingSenderId: "710416988251",
  appId: "1:710416988251:web:dc7521976483fb9b76e77e"
};




// Initialize Firebase

let app;
try {
     app = initializeApp(firebaseConfig);
} catch (error) {
 console.log(error)   
}


export const db = getFirestore(app);

