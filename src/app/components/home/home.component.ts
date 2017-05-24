import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: 'HomeComponent',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('sideMenu') menuComponent: MenuComponent;

  constructor() { }

  ngOnInit() {
  }

  public openSideMenu() {
    this.menuComponent.open();
  }

  public closeSideMenu() {
    this.menuComponent.close();
  }

}
