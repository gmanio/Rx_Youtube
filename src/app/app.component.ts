import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs/Rx';

import { YoutubeService } from "./services/youtube.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private youtube: YoutubeService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      Rx.Observable.fromPromise(this.youtube.getVideos())
        .subscribe(this.onLoadVideos);
    }, 1000);

  }

  onLoadVideos(res) {
    debugger;
  }
}
