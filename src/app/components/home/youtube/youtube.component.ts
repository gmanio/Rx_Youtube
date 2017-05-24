import { Component, ViewChild, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { YoutubeService } from "../../../services/youtube.service";
import { slideInOutAnimation } from "../../animations/slide.animation";

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class YoutubeComponent implements OnInit, OnDestroy {
  public videoList = [];
  private subscription: Subscription;

  constructor(private router: Router,
              private youtube: YoutubeService,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    if ( this.youtube.isLoadedYoutubeClient ) {
      this.getVideo();
    }

    this.subscription = this.youtube.isEnableService.subscribe(() => this.getVideo());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getVideo() {
    this.youtube.requestVideoList({ q: 'test' })
      .map(res => res['result']['items'])
      .subscribe((res) => this.setVideoList(res));
  }

  getMoreVideos() {
    this.youtube.requestMoreVideoList()
      .map(res => res['result']['items'])
      .subscribe((res) => this.setVideoList(res));
  }

  setVideoList(res) {
    this.videoList = res;
    this.changeDetector.detectChanges();
  }

  public onRoutesArchive() {
    this.router.navigate(['archive']);
  }
}
