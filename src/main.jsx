import { initializeApp } from "firebase/app";

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const firebaseConfig = {
  apiKey: "AIzaSyDXNCJxo7UaYJ7afRsRdakPIBbUZ_P6i7w",
  authDomain: "ecommerce-4c734.firebaseapp.com",
  projectId: "ecommerce-4c734",
  storageBucket: "ecommerce-4c734.appspot.com",
  messagingSenderId: "97636558991",
  appId: "1:97636558991:web:872fdc48aacfffa57b68fa"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
