import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJFmBxMn0kYqkzip94PxpQzKobqcg2e3o",
    authDomain: "kaushikjadhav01portfolio-153b5.firebaseapp.com",
    projectId: "kaushikjadhav01portfolio-153b5",
    storageBucket: "kaushikjadhav01portfolio-153b5.appspot.com",
    messagingSenderId: "988589413004",
    appId: "1:988589413004:web:ceb7cc7860183ae35c61a9",
    measurementId: "G-54W3BVF9EGXXXXX"
};

const firebaseApp  = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider();

// export {auth,provider}
export default db;