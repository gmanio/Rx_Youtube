import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private el: ElementRef) {
  }

  ngOnInit() {}

  public open() {
    this.el.nativeElement.classList.add('active');
  }

  public close() {
    this.el.nativeElement.classList.remove('active');
  }
}
