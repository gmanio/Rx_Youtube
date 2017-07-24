import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, Subject } from "rxjs";

@Injectable()
export class FirebaseService {
  private currentUser = null;

  constructor() {
    let config = {
      apiKey: "AIzaSyDXv4TpTD3Jm1HHnXoOphHq7caRmNZ1P2E",
      authDomain: "rxtube-59172.firebaseapp.com",
      databaseURL: "https://rxtube-59172.firebaseio.com",
      projectId: "rxtube-59172",
      storageBucket: "rxtube-59172.appspot.com",
      messagingSenderId: "214310109076"
    };

    firebase.initializeApp(config);
  }

  public resetPassword(email) {
    firebase.auth().sendPasswordResetEmail(email).then(() => {
      debugger;
    })
  }

  public signOut() {
    let subject = new Subject();

    Observable.fromPromise(firebase.auth().signOut()).subscribe(subject);

    subject.subscribe(() => {
      console.log(firebase.auth().currentUser);
      debugger;
    })

    return subject;
  }

  public signIn(email, password): Observable<any> {
    const signIn$ = Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(email, password))

    let signObservable = signIn$.share();

    signObservable.subscribe(
      (user) => {
        this.currentUser = user;
      },
      (error) => {
        // Handle Errors here.
        var errorCode = error['code'];
        var errorMessage = error.message;
        if ( errorCode === 'auth/wrong-password' ) {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
      })

    return signObservable;

    //
    // signIn$.subscribe();
    // .then((user) => {
    //   var cred = firebase.auth.EmailAuthProvider.credential(
    //     email,
    //     password
    //   );
    //
    //   firebase.auth().onAuthStateChanged((user) => {
    //     if ( user ) {
    //       // User is signed in.
    //       debugger;
    //     } else {
    //       // No user is signed in.
    //       debugger;
    //     }
    //   })
    //
    // })
    // .catch(function (error) {
    //   // Handle Errors here.
    //   var errorCode = error['code'];
    //   var errorMessage = error.message;
    //   if ( errorCode === 'auth/wrong-password' ) {
    //     alert('Wrong password.');
    //   } else {
    //     alert(errorMessage);
    //   }
    // })
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
