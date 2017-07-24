import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public email = "";
  public passwd = "";
  public user = null;

  constructor(private loginService: FirebaseService) {
  }

  ngOnInit() {
    // var outer = Observable.interval(1000).take(2);
    //
    // var source = outer.mergeMap(function (x) {
    //   console.log('outer');
    //   return Observable.interval(500).take(3).map(y => `${x}:${y}`)
    // });
    //
    // source.subscribe(d => console.log(d));
    //
    //
    // var outer = Observable.interval(1000).take(2);
    //
    // var source = outer.switchMap(function (x, y) {
    //   console.log('outer');
    //   return Observable.interval(500).take(3).map(y => `${x}:${y}`)
    // });

    // var outer = Observable.interval(1000).take(2);
    //
    // var source = outer.flatMap(function (x, y) {
    //   console.log('outer');
    //   return Observable.interval(500).take(3).map(y => `${x}:${y}`)
    // });

    // source.subscribe(d => console.log(d));
    this.workk();

  }

  async workk(){
    console.log('test');
    await setTimeout(()=>{console.log('await')}, 4000);
    console.log('test');
  }

  public login() {
    this.loginService.signIn(this.email, this.passwd)
      .subscribe((user) => {
        this.user = user.email;
      });
  }

  public logout() {
    this.loginService.signOut().subscribe((res) => {
      this.user = res;
    })
  }
}
