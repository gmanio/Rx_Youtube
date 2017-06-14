import "../../../vendor/google/player.js";
import { Component, AfterViewInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

declare let onYTReady: Function;
declare let window: Window;
declare let YT;

@Component({
  selector: 'PlayerComponent',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements AfterViewInit {
  private oPlayer;
  private videoId;

  constructor(private location: Location,
              private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.videoId = params.videoId;
    })
  }

  ngAfterViewInit() {
    if ( !window['YT'] ) {
      onYTReady = () => {
        this.oPlayer = new YT.Player('gPlayer', {
          height: '100%',
          width: '100%',
          videoId: this.videoId
        })
      }
    } else {
      this.oPlayer = new YT.Player('gPlayer', {
        height: '100%',
        width: '100%',
        videoId: this.videoId
      })
    }


  }

  goBack() {
    this.location.back();
  }
}
