import { Component } from '@angular/core';
import { LoadingService } from "./services/loading.service";
import { ApiService } from "./services/api.service";

@Component({
  selector: 'App',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public loaderStatus: boolean = false;

  constructor(private loader: LoadingService,
              private api: ApiService) {
    this.printDevLogo();

    this.loader.loaderStatus.subscribe((status) => {
      this.loaderStatus = status;
    })
  }

  private printDevLogo() {
    // setTimeout(console.log.bind(console, "%cGMAN", "font:8em Arial;color:#EC6521;font-weight:bold"), 0);
    // setTimeout(console.log.bind(console, "%cDevTools@2017", "font:2em sans-serif;color:#333;"), 0);
  }
}
