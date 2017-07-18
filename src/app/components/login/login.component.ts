import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public email = "";
  public passwd = "";

  constructor(private loginService: FirebaseService) {

  }

  ngOnInit() {
  }

  login() {

    this.loginService.signIn(this.email, this.passwd);
  }
}
