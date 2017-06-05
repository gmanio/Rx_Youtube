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
  public videoList = [];
  private subscription: Subscription;

  @ViewChild(SwiperVscrollDirective) scrollSwiper;

  constructor(private router: Router,
              private youtube: YoutubeService,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
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


    Observable.timer(1000).subscribe(() => {
      console.log(this.scrollSwiper);

      this.scrollSwiper.refresh();
    })
  }

  onClickPlayVideo(video) {
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: "merge",
      preserveFragment: true,
      queryParams: video
    };
    console.log(video);

    this.router.navigate(['player'], navigationExtras);
  }

  public onRoutesArchive() {
    this.router.navigate(['archive']);
  }
}
