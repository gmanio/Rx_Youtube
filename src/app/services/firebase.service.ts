import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  constructor() {
    // Initialize Firebase
    // TODO: Replace with your project's customized code snippet
    var config = {
      apiKey: "AIzaSyDXv4TpTD3Jm1HHnXoOphHq7caRmNZ1P2E",
      authDomain: "rxtube-59172.firebaseapp.com",
      databaseURL: "https://rxtube-59172.firebaseio.com",
      projectId: "rxtube-59172",
      storageBucket: "rxtube-59172.appspot.com",
      messagingSenderId: "214310109076"
    };

    firebase.initializeApp(config);
  }

  signIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        var cred = firebase.auth.EmailAuthProvider.credential(
          email,
          password
        );

        firebase.auth().onAuthStateChanged((user) => {
          if ( user ) {
            // User is signed in.
            debugger;
          } else {
            // No user is signed in.
            debugger;
          }
        })

      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error['code'];
        var errorMessage = error.message;
        if ( errorCode === 'auth/wrong-password' ) {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
      })
  }

  register(email, password) {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error['code'];
        var errorMessage = error.message;
      });
  }
}
