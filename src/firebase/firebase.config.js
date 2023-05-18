// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeU_4XAN63pMAZBvx4VWgEV09fXlhGWU0",
  authDomain: "disney-magic-toys.firebaseapp.com",
  projectId: "disney-magic-toys",
  storageBucket: "disney-magic-toys.appspot.com",
  messagingSenderId: "131829075380",
  appId: "1:131829075380:web:f62d9bd4e41a1e7ca536e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;