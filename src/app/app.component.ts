import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import * as Rx from 'rxjs/Rx';

import { YoutubeService } from "./services/youtube.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, AfterContentInit {
  ngAfterContentInit(): void {
    Rx.Observable.fromPromise(this.youtube.getVideos())
      .map((data) => {
        return data['result']
      })
      .subscribe(this.onLoadVideos);
  }

  constructor(private youtube: YoutubeService) {
    this.printDevLogo()
  }

  private printDevLogo() {
    setTimeout(console.log.bind(console, "%cGMAN", "font:8em Arial;color:#EC6521;font-weight:bold"), 0);
    setTimeout(console.log.bind(console, "%cDevTools@2017", "font:2em sans-serif;color:#333;"), 0);

  }

  ngAfterViewInit(): void {

  }

  onLoadVideos(res) {
    debugger;
  }
}
