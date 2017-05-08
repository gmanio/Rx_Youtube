import { Component, HostListener, AfterContentInit } from '@angular/core';
import { YoutubeService } from "../../services/youtube.service";
import { slideInOutAnimation } from "../animations/slide.animation";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class YoutubeComponent {
  @HostListener('click')
  onClick() {
    this.router.navigate(['archive']);
  }

  constructor(private youtube: YoutubeService,
              private router: Router) {
  }

  getVideo() {
    if ( this.youtube.isEnable ) {
      Observable.fromPromise(this.youtube.getVideos())
        .subscribe(this.onLoadVideo);
    }
  }

  onLoadVideo() {

  }
}
