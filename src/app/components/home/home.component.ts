import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: 'HomeComponent',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('sideMenu') menuComponent: MenuComponent;

  constructor() { }

  ngAfterViewInit(): void {

  }

  public openSideMenu() {
    this.menuComponent.open();
  }

  public closeSideMenu() {
    this.menuComponent.close();
  }

}
