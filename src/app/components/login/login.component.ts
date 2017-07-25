import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public email = "";
  public passwd = "";
  public user = null;

  constructor(private loginService: FirebaseService,
              private router: Router) {
  }

  ngOnInit() {

  }

  public login() {
    this.loginService.signIn(this.email, this.passwd)
      .subscribe((user) => {
        this.user = user.email;
        this.router.navigate(['home']);
      });
  }

  public logout() {
    this.loginService.signOut().subscribe((res) => {
      this.user = res;
    })
  }
}
