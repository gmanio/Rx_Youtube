import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {


  @HostListener('click')
  onClick() {
    this.router.navigate(['main']);
  }


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
