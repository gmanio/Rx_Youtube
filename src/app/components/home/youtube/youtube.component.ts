import { Component, ChangeDetectorRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
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


    setTimeout(() => {
      console.log(this.scrollSwiper);
      this.scrollSwiper.refresh();
    }, 1000);
  }

  public onRoutesArchive() {
    this.router.navigate(['archive']);
  }
}
