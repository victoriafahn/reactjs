import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCStzQpwiI5yK7T--eId2Ogxii04pq_IY4",
    authDomain: "reactjs-4abb4.firebaseapp.com",
    projectId: "reactjs-4abb4",
    storageBucket: "reactjs-4abb4.appspot.com",
    messagingSenderId: "656654768599",
    appId: "1:656654768599:web:69b061178dd385b1f6d392"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
)
