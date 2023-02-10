import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7pNSD0jNF0Oi1SvCUC0IldgCromh5l5E",
  authDomain: "react-blog-e0b97.firebaseapp.com",
  projectId: "react-blog-e0b97",
  storageBucket: "react-blog-e0b97.appspot.com",
  messagingSenderId: "109617701934",
  appId: "1:109617701934:web:ccdd2e81413ba2e392ebbf"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

