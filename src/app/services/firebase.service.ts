import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  private oInstance = firebase;

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

    this.oInstance.initializeApp(config);
  }

  signIn(email, password){
    this.oInstance.auth().signInWithEmailAndPassword(email, password)
      .then(()=>{
      debugger;
      })
      .catch(function(error) {
      // Handle Errors here.
      debugger;
      // ...
    });
  }
}
