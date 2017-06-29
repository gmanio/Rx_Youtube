import { Component } from '@angular/core';

@Component({
  selector: 'App',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  public isLoading: boolean = false;

  constructor() {
    this.printDevLogo();
  }

  private printDevLogo() {
    // setTimeout(console.log.bind(console, "%cGMAN", "font:8em Arial;color:#EC6521;font-weight:bold"), 0);
    // setTimeout(console.log.bind(console, "%cDevTools@2017", "font:2em sans-serif;color:#333;"), 0);
  }

  public startLoading() {
    this.isLoading = true;
  }

  public stopLoading() {
    this.isLoading = false;
  }
}
