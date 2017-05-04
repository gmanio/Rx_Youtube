import { Component, HostListener } from '@angular/core';
import { YoutubeService } from "../../services/youtube.service";
import { slideInOutAnimation } from "../animations/slide.animation";
import { Router } from "@angular/router";

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  // make slide in/out animation available to this component
  animations: [slideInOutAnimation],
  // attach the slide in/out animation to the host (root) element of this component
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

  onLoadVideos() {
    debugger;
  }
}
