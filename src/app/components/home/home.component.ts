import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";
import { LoadingService } from "../../services/loading.service";
import { Observable } from "rxjs";

@Component({
  selector: 'HomeComponent',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('sideMenu') menuComponent: MenuComponent;

  constructor(private loader: LoadingService) {
  }

  ngAfterViewInit() {
  }

  public openSideMenu() {
    this.menuComponent.open();
  }

  public closeSideMenu() {
    this.menuComponent.close();
  }

}
