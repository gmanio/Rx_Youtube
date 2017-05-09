import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../menu/menu.component";
import { ArchiveComponent } from "../archive/archive.component";
import { YoutubeComponent } from "./youtube.component";
import { YoutubeService } from "../../services/youtube.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    YoutubeComponent,
    ArchiveComponent,
    MenuComponent
  ],
  providers: [
    YoutubeService
  ]
})
export class YoutubeModule {
}