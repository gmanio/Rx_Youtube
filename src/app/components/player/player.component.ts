import "../../../vendor/google/player.js";
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

declare let onYTReady: Function;
declare let YT;

@Component({
  selector: 'PlayerComponent',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements AfterViewInit {
  private oPlayer;

  constructor(private location: Location,
              private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      debugger;
    })
  }

  ngAfterViewInit() {
    onYTReady = () => {
      this.oPlayer = new YT.Player('gPlayer', {
        height: '100%',
        width: '100%',
        videoId: 'M7lc1UVf-VE'
      });
    }
  }

  goBack() {
    this.location.back();
  }
}
