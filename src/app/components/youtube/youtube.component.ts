import {
  Component, HostListener, AfterContentInit, AfterViewInit, ViewChild, OnChanges,
  ChangeDetectorRef
} from '@angular/core';
import { YoutubeService } from "../../services/youtube.service";
import { slideInOutAnimation } from "../animations/slide.animation";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class YoutubeComponent {
  public videoList = [];

  @ViewChild('sideMenu') menuComponent: MenuComponent;

  constructor(private youtube: YoutubeService, private changeDetector: ChangeDetectorRef) {

    this.youtube.isEnableService.subscribe(() => this.getVideo())
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
}
