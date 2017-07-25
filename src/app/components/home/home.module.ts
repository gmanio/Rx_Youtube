import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeService } from "../../services/youtube.service";
import { MenuComponent } from "./menu/menu.component";
import { HomeRouter } from "./home.routes";
import { HomeComponent } from "./home.component";
import { RouterGuardService } from "../../services/router-guard.service";
import { ArchiveComponent } from "./archive/archive.component";
import { SharedModule } from "../shared/shared.module";
import { YoutubeComponent } from "./youtube/youtube.component";
import { FormsModule } from "@angular/forms";
import { PlayerComponent } from "../player/player.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HomeRouter
  ],
  declarations: [
    MenuComponent,
    HomeComponent,
    ArchiveComponent,
    YoutubeComponent,
    PlayerComponent
  ],
  providers: [
    YoutubeService,
    RouterGuardService
  ]
})

export class HomeModule {
}
