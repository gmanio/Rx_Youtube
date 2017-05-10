import {
  Component, HostListener, AfterContentInit, AfterViewInit, ViewChild,
  ChangeDetectorRef, OnInit, OnDestroy
} from '@angular/core';
import { YoutubeService } from "../../services/youtube.service";
import { slideInOutAnimation } from "../animations/slide.animation";
import { MenuComponent } from "../menu/menu.component";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  // animations: [slideInOutAnimation],
  // host: { '[@slideInOutAnimation]': '' }
})
export class YoutubeComponent implements OnInit, OnDestroy {
  public videoList = [];
  private subscription: Subscription;

  @ViewChild('sideMenu') menuComponent: MenuComponent;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    if ( this.youtube.isLoadedYoutubeClient ) {
      this.getVideo();
    }

    this.subscription = this.youtube.isEnableService.subscribe(() => this.getVideo());
  }

  constructor(private youtube: YoutubeService,
              private router: Router,
              private changeDetector: ChangeDetectorRef) {
  }

  getVideo() {
    this.youtube.getVideos({ q: 'test' })
      .map(res => res['result']['items'])
      .subscribe((res) => this.onSuccessLoadVideos(res));
  }

  getMoreVideos() {
    this.youtube.getMoreVideos()
      .map(res => res['result']['items'])
      .subscribe((res) => this.onSuccessLoadVideos(res));
  }

  onSuccessLoadVideos(res) {
    this.videoList = res;
    this.changeDetector.detectChanges();
  }

  public openSideMenu() {
    this.menuComponent.open();
  }

  public onRoutesArchive() {
    this.router.navigate(['archive']);
  }
}
