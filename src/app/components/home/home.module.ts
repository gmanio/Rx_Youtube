import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeService } from "../../services/youtube.service";
import { YoutubeComponent } from "./youtube/youtube.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeRouter } from "./home.routes";
import { HomeComponent } from "./home.component";
import { RouterGuardService } from "../../services/router-guard.service";
import { ArchiveComponent } from "./archive/archive.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRouter
  ],
  declarations: [
    YoutubeComponent,
    MenuComponent,
    HomeComponent,
    ArchiveComponent
  ],
  providers: [
    YoutubeService,
    RouterGuardService
  ]
})

export class HomeModule {
}
