import { Component, ChangeDetectorRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, Observable } from "rxjs";
import { Router, NavigationExtras } from "@angular/router";
import { YoutubeService } from "../../../services/youtube.service";
import { SwiperVscrollDirective } from "../../../directives/swiper-vscroll.directive";

@Component({
  selector: 'YoutubeComponent',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})

export class YoutubeComponent implements OnInit, OnDestroy {
  @ViewChild(SwiperVscrollDirective) scrollSwiper;

  public videoList = [];
  private subscription: Subscription;

  constructor(private router: Router,
              private youtube: YoutubeService,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    if ( this.youtube.isLoadedYoutubeClient ) {
      this.getVideo();
    }

    this.subscription = this.youtube.isEnableService.subscribe(() => this.getVideo());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getVideo() {
    const params = {
      q: 'wwdc2017'
    }

    this.youtube.requestVideoList(params)
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


    Observable.timer(100).subscribe(() => {
      this.scrollSwiper.refresh();
    })
  }

  onClickPlayVideo(video) {
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: "merge",
      preserveFragment: true,
      queryParams: {
        videoId: video.id.videoId
      }
    };

    this.router.navigate(['player'], navigationExtras);
  }

  public onRoutesArchive() {
    this.router.navigate(['archive']);
  }
}
