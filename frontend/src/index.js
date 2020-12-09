import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import firebase from 'firebase';
import store from './store';
import { Provider } from "react-redux"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCttN1H7EXdaWHsYOgKXexsSYcGcF2LKGA",
  authDomain: "dd-dinner-dog.firebaseapp.com",
  projectId: "dd-dinner-dog",
  storageBucket: "dd-dinner-dog.appspot.com",
  messagingSenderId: "61338504206",
  appId: "1:61338504206:web:4f195fab8adf8588e5805f",
  measurementId: "G-NFJBN8CM17"
};


firebase.initializeApp(firebaseConfig);

window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
