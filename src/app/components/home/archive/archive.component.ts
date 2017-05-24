import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { slideInOutAnimation } from "../animations/slide.animation";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class ArchiveComponent implements OnInit {
  @HostListener('click')
  onClick() {
    this.router.navigate(['main']);
  }

  constructor(private router: Router, private location: Location) {
  }

  ngOnInit() {
  }

}
